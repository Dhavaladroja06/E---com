import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DeviceEventEmitter } from "react-native";


export function useProfileData() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        setUsername(storedUsername);
      } catch (error) {
        console.error("Error retrieving username:", error);
      }
    };

    fetchUsername();
  }, []); 

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      DeviceEventEmitter.emit("logout");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { username, handleLogout };
}
