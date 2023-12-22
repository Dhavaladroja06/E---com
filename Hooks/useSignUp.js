import { useState } from "react";
import { firebase } from "@react-native-firebase/database";


const useSignUp = (navigation) => {
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [isEmailTaken, setIsEmailTaken] = useState(false);

  const signUp = async (data) => {
    try {
      const database = firebase.database();
      const usersRef = database.ref("users");

      const snapshotUsername = await usersRef
        .orderByChild("username")
        .equalTo(data.username)
        .once("value");

      const snapshotEmail = await usersRef
        .orderByChild("email")
        .equalTo(data.email)
        .once("value");

      if (snapshotUsername.exists()) {
        setIsUsernameTaken(true);
        setIsEmailTaken(false);
      } else if (snapshotEmail.exists()) {
        setIsUsernameTaken(false);
        setIsEmailTaken(true);
      } else {
        setIsUsernameTaken(false);
        setIsEmailTaken(false);
        usersRef.push(data);
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return { isUsernameTaken, isEmailTaken, signUp };
};

export default useSignUp;
