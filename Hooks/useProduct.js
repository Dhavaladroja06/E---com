import { useEffect, useState } from "react";
import axios from "axios";
import { firebase } from "@react-native-firebase/database";
import { getUserID } from "../components/asyncStorage";

function useProduct() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    fetchUserCart();
  }, []);

  const fetchUserCart = async () => {
    try {
      const userId = await getUserID();
      const cartRef = firebase.database().ref(`users/${userId}/cart`);
      cartRef.on("value", (snapshot) => {
        if (snapshot.exists()) {
          const cartItems = snapshot.val();
          const cartArray = Object.values(cartItems);
          setUserCart(cartArray);
        } else {
          setUserCart([]);
        }
      });
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  const addToCart = async (item) => {
    try {
      const userId = await getUserID();
      const cartRef = firebase.database().ref(`users/${userId}/cart`);

      const isItemInCart = userCart.some((cartItem) => cartItem.id === item.id);

      if (!isItemInCart) {
        cartRef.push(item);
      }

      fetchUserCart();
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = async (item) => {
    try {
      const userId = await getUserID();
      const cartRef = firebase.database().ref(`users/${userId}/cart`);

      const cartDataSnapshot = await cartRef.once("value");
      const cartData = cartDataSnapshot.val();
      const cartKey = Object.keys(cartData).find(
        (key) => cartData[key].id === item.id
      );

      if (cartKey) {
        await cartRef.child(cartKey).remove();
      }

      fetchUserCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") {
      return true;
    }
    const isMatchingCategory =
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    return (
      product.title.toLowerCase().includes(searchText.toLowerCase()) &&
      isMatchingCategory
    );
  });

  return {
    products,
    searchText,
    selectedCategory,
    userCart,
    setSearchText,
    handleCategoryChange,
    filteredProducts,
    addToCart,
    removeFromCart,
  };
}

export default useProduct;
