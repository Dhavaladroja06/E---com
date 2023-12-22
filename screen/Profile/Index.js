import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../components/Button";
import Background from "../../components/Background";
import { styles } from "./Styles";
import { useProfileData } from "../../Hooks/useProfileData"; 

const ProfileScreen = () => {
  const { username, handleLogout } = useProfileData();

  const defaultProfileImage = require("../Profile/image/user.png");

  return (
    <Background>
      <View style={styles.card}>
        <Image source={defaultProfileImage} style={styles.profileImage} />
        {username ? (
          <Text style={styles.usernameText}>Welcome {username}</Text>
        ) : (
          <Text style={styles.usernameText}>Welcome Guest</Text>
        )}

        <Button title="Logout" onPress={handleLogout} />
      </View>
    </Background>
  );
};

export default ProfileScreen;
