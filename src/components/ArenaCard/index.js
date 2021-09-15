import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaCard = ({ arena }) => {
  const { locationName } = arena;

  return (
    <View style={styles.container}>
      <Text>{locationName}</Text>
    </View>
  )
}

export default ArenaCard
