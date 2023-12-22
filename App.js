import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticatedHome from "./AuthenticatedHome";
import Login from "./screen/Login/Index";
import SignUpScreen from "./screen/Signin/Index";
import CartScreen from "./screen/Cart/Index";
import CustomLoading from "./components/CustomLoading";
import { AntDesign  } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import useAuth from "./Hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "@react-native-firebase/database";
import { firebaseConfig } from "./components/firebaseConfig";
import { colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const CartIcon = () => {
  const navigation = useNavigation();

  const handleCartPress = () => {
    navigation.navigate("CartScreen")
  };

  return (
    <TouchableOpacity onPress={handleCartPress}>
      <View style={{ paddingRight: 15 }}>
        <AntDesign  name="shoppingcart" size={24} color={colors.accent01} />
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <CustomLoading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          initialRouteName={"AuthenticatedHome"}
          screenOptions={{
            headerStyle: { backgroundColor: colors.primary01 },
            headerTitleStyle: { color: colors.accent01, fontWeight: "bold" },
            headerBackTitleStyle: { color:colors.accent01 },
          }}
        >
          <Stack.Screen
            name="AuthenticatedHome"
            component={AuthenticatedHome}
            options={{
              title: "APP",
              headerRight: () => <CartIcon />,
            }}
          />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={"Login"}
          screenOptions={{
            headerStyle: { backgroundColor: colors.primary01 },
            headerTitleStyle: { color: colors.accent01, fontWeight: "bold" },
            headerBackTitleStyle: { color: colors.accent01 },
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
