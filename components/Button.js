import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary06, 
    justifyContent:"center",
    width: 280,
    height: 50,
    borderRadius: 30,
    marginTop: 8,
    alignItems: 'center',
    marginLeft: 10, 
    marginTop: 15
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
