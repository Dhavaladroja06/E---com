import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserID = async () => {
  try {
    const userId = await AsyncStorage.getItem("UserID");
    return userId;
  } catch (error) {
    console.error("Error getting UserID:", error);
    return null; 
  }
};

export const setLoggedInStatus = async (value) => {
  try {
    await AsyncStorage.setItem("isLoggedIn", value ? "true" : "false");
  } catch (error) {
    console.error("Error setting isLoggedIn:", error);
  }
};

export const setUsername = async (username) => {
  try {
    await AsyncStorage.setItem("username", username);
  } catch (error) {
    console.error("Error setting username:", error);
  }
};

export const setUserID = async (userId) => {
  try {
    await AsyncStorage.setItem("UserID", userId);
  } catch (error) {
    console.error("Error setting UserID:", error);
  }
};
