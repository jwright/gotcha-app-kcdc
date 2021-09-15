import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useMutation } from "@apollo/client"

import RegistrationForm from "../../components/RegistrationForm";

import RegisterPlayerMutation from "../../mutations/RegisterPlayer"

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

const RegistrationScreen = () => {
  const [registerPlayer, { data }] = useMutation(RegisterPlayerMutation);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Player Registration</Text>
      <RegistrationForm onRegistration={(player) => {
        registerPlayer({ variables: player });
      }} />
    </View>
  )
}

export default RegistrationScreen;
