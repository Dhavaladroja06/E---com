import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Controller } from "react-hook-form";
import { colors } from "../constants/colors";

const Textinput = ({
  name,
  label,
  icon,
  control,
  secureTextEntry,
  placeholder,
  errors,
  rules,
}) => {
  return (
    <View style={{ padding: 8 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        {icon && (
          <Icon name={icon} size={22} colors={colors.primary07} style={styles.icon} />
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholderTextColor={colors.primary07}
              />
            </>
          )}
          name={name}
          rules={rules}
          errors={errors}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  container: {
    flexDirection: "row",
    width: 280,
    height: 50,
    backgroundColor: colors.accent00,
    borderRadius: 30,
    paddingHorizontal: 18,
    marginTop: 5,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.primary08,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});

export default Textinput;
