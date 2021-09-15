import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client'

import ArenaListScreen from "./screens/ArenaListScreen";
import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

import client from "./helpers/client"

const Stack = createNativeStackNavigator();

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ArenaList" component={ArenaListScreen} options={{ headerShown: false, title: "Select an Arena" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title: "Gotcha!" }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false, title: "Register Player" }} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
)

export default App;
