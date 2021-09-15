import React from "react"
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Arenas = ({ arenas }) => (
  <View style={styles.container}>
    <Text>You found {arenas.length} arenas!</Text>
  </View>
)

export default Arenas;
