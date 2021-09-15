import React from "react"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RegistrationScreen = () => (
  <View style={styles.container}>
    <Text>Register them playas</Text>
  </View>
)

export default RegistrationScreen;
