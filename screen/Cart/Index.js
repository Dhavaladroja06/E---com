import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Background from "../../components/Background";
import useCart from "../../Hooks/useCart";
import { styles } from "./Styles";

function CartScreen() {
  const { cartData, totalPrice, handleRemoveItem } = useCart();

  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          data={cartData}
          keyExtractor={(item) => (item.id ? item.id.toString() : null)}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>Price: ${item.price}</Text>
              <TouchableOpacity
                onPress={() => handleRemoveItem(item.id)}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>Remove from Cart</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
      </View>
    </Background>
  );
}

export default CartScreen;
