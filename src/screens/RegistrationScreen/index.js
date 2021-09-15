import React from "react"
import { StyleSheet, Text, View } from "react-native"

import RegistrationForm from "../../components/RegistrationForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
    fontSize: 40,
  }
});

const RegistrationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Player Registration</Text>
    <RegistrationForm onRegistration={(player) => console.log("Register", player)} />
  </View>
)

export default RegistrationScreen;
