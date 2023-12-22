import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const CustomLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" colors={colors.accent01} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomLoading;
