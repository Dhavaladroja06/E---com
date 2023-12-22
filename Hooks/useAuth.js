// useAuth.js
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DeviceEventEmitter } from "react-native";

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkIsSignedIn = () => {
    AsyncStorage.getItem("isLoggedIn")
      .then((value) => {
        setIsLoading(false);
        const loggedIn = value === "true";
        setIsLoggedIn(loggedIn);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error reading login status from AsyncStorage:", error);
      });
  };

  useEffect(() => {
    checkIsSignedIn();
    const listener = DeviceEventEmitter.addListener("logout", checkIsSignedIn);

    return () => {
      listener.remove();
    };
  }, []);

  return { isLoggedIn, isLoading };
}
