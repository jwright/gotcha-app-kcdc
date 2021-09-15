import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MatchScreen = () => (
  <View style={styles.container}>
    <Text>Welcome to your Match!</Text>
  </View>
)

export default MatchScreen
