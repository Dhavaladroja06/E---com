import { DeviceEventEmitter } from "react-native";
import { firebase } from "@react-native-firebase/database";
import { setLoggedInStatus, setUsername, setUserID } from "../components/asyncStorage"; 

const useLogin = () => {
  const login = async (data) => {
    try {
      const usersRef = firebase.database().ref("users");
      const snapshot = await usersRef.once("value");
      const userData = snapshot.val();

      const user = Object.values(userData).find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        const userId = Object.keys(userData).find(
          (key) => userData[key].email === user.email
        );

        await setLoggedInStatus(true);
        await setUsername(user.username);
        await setUserID(userId);

        DeviceEventEmitter.emit("logout");
        return null;
      } else {
        return "Invalid email or password";
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return "An error occurred while logging in";
    }
  };

  return { login };
};

export default useLogin;
