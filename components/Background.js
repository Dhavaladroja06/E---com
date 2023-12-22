import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../constants/colors';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={[ colors.primary04 , colors.primary05]}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default Background;
