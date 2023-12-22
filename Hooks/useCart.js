import { useEffect, useState } from "react";
import { firebase } from "@react-native-firebase/database";
import { getUserID } from "../components/asyncStorage";

function useCart() {
  const [userId, setUserId] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await getUserID();
        if (storedUserId) {
          setUserId(storedUserId);

          const dbRef = firebase.database().ref(`users/${storedUserId}/cart`);

          dbRef.on("value", (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              const cartItems = Object.values(data);

              setCartData(cartItems);
              const totalPrice = cartItems.reduce(
                (total, item) => total + item.price,
                0
              );
              setTotalPrice(totalPrice);
            } else {
              setCartData([]);
              setTotalPrice(0);
            }
          });
        }
      } catch (error) {
        console.error("Error getting user ID from AsyncStorage:", error);
      }
    };

    fetchUserId();

    return () => {
      if (userId) {
        firebase.database().ref(`users/${userId}/cart`).off("value");
      }
    };
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      const userId = await getUserID();
      const cartRef = firebase.database().ref(`users/${userId}/cart`);

      const cartDataSnapshot = await cartRef.once("value");
      const cartData = cartDataSnapshot.val();
      const cartKey = Object.keys(cartData).find(
        (key) => cartData[key].id === itemId
      );

      if (cartKey) {
        await cartRef.child(cartKey).remove();
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return { userId, cartData, totalPrice, handleRemoveItem };
}

export default useCart;
