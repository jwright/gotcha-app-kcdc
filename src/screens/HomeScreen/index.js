import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component {
  handleGrantPermissions = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (!granted) {
      console.log("You need to grant permissions to use Gotcha!")
    }

    this.navigate();
  }

  navigate = async () => {
    const { navigation } = this.props;
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

    navigation.navigate("ArenaList", { location: { latitude, longitude } });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Gotcha!</Text>
        <Text>We will get you playing in a moment.</Text>
        <Text>In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.</Text>
        <Button onPress={this.handleGrantPermissions} title="Find Nearby Arenas" />
      </View>
    )
  }
}

export default HomeScreen;
