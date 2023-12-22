import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Textinput from "../../components/Textinput";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import Background from "../../components/Background";
import { styles } from "./Styles";
import useLogin from "../../Hooks/useLogin";

const Login = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { login } = useLogin();

  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    const result = await login(data);
    if (result === null) {
      setLoginError("");
    } else {
      setLoginError(result);
    }
  };

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Background>
      <View style={{ marginTop: "30%" }}>
        <View style={styles.container}>
          <Text style={styles.title}>
            <Text style={styles.loginText}>Lo</Text>
            <Text>g</Text>
            <Text style={styles.loginText}>in</Text>
          </Text>
          <Textinput
            label={"Email:"}
            icon={"mail"}
            name="email"
            control={control}
            placeholder="Enter your email"
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

          <Textinput
            label={"Password:"}
            icon={"lock"}
            name="password"
            control={control}
            secureTextEntry={true}
            placeholder="Enter your password"
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

          {loginError !== "" && (
            <Text style={styles.errorText}>{loginError}</Text>
          )}

          <Button title="Login" onPress={handleSubmit(onSubmit)} />
          <TouchableOpacity onPress={goToSignUp}>
            <Text style={styles.text}>Don't have an account? Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Login;
