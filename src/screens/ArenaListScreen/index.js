import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaListScreen = ({ route }) => {
  const { location } = route.params;

  return (
    <View style={styles.container}>
      <Text>Welcome to the arenas at {location.latitude}, {location.longitude}!</Text>
    </View>
  )
}

export default ArenaListScreen;
