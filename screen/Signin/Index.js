import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Textinput from "../../components/Textinput";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import Background from "../../components/Background";
import { styles } from "./Styles";
import useSignUp from "../../Hooks/useSignUp"; 

const SignUpScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isUsernameTaken, isEmailTaken, signUp } = useSignUp(navigation);

  const onSubmit = (data) => {
    signUp(data);
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            <Text style={styles.loginText}>Re</Text>
            <Text>g</Text>
            <Text style={styles.loginText}>ister</Text>
          </Text>

          <Textinput
            label="Username"
            placeholder="Enter your username"
            icon="user"
            control={control}
            name="username"
            errors={errors}
            rules={{
              required: "Username is required",
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
            }}
          />
          {errors.username && (
            <Text style={styles.errorText}>{errors.username.message}</Text>
          )}
          {isUsernameTaken && (
            <Text style={styles.errorText}>Username is already taken.</Text>
          )}
          <Textinput
            label="Email"
            placeholder="Enter your email"
            icon="mail"
            control={control}
            name="email"
            errors={errors}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                message: "Invalid email address",
              },
            }}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
          {isEmailTaken && (
            <Text style={styles.errorText}>Email is already taken.</Text>
          )}
          <Textinput
            label="Phone Number"
            placeholder="Enter your phone number"
            icon="phone"
            control={control}
            name="phoneNumber"
            errors={errors}
            rules={{
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 characters",
              },
            }}
          />
          {errors.phoneNumber && (
            <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>
          )}
          <Textinput
            label="Password"
            placeholder="Enter your password"
            icon="lock"
            control={control}
            name="password"
            secureTextEntry={true}
            errors={errors}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
          <Button title="Register" onPress={handleSubmit(onSubmit)} />
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.text}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
};

export default SignUpScreen;