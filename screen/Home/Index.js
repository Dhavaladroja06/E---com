import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Background from "../../components/Background";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./Styles";
import useProduct from "../../Hooks/useProduct";

const HomeScreen = () => {
  const {
    searchText,
    selectedCategory,
    userCart,
    setSearchText,
    handleCategoryChange,
    filteredProducts,
    addToCart,
    removeFromCart,
  } = useProduct();

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.searchFilterRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="🔍 Search"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
          <Picker
            style={styles.categoryDropdown}
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => handleCategoryChange(itemValue)}
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Electronics" value="Electronics" />
            <Picker.Item label="jewelery" value="jewelery" />
            <Picker.Item label="Men" value="Men's Clothing" />
            <Picker.Item label="Women" value="Women's Clothing" />
          </Picker>
        </View>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const isItemInCart = userCart.some(
              (cartItem) => cartItem.id === item.id
            );

            return (
              <TouchableOpacity style={styles.productContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <TouchableOpacity
                  style={[
                    styles.addToCartButton,
                    isItemInCart && styles.removeFromCartButton,
                  ]}
                  onPress={() => {
                    if (isItemInCart) {
                      removeFromCart(item);
                    } else {
                      addToCart(item);
                    }
                  }}
                >
                  <Text style={styles.addToCartButtonText}>
                    {isItemInCart ? "Remove from Cart" : "Add to Cart"}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Background>
  );
};

export default HomeScreen;
