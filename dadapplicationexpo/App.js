import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry
} from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import all screens
import HomeScreen from "./components/pages/HomeScreen";
import LoginScreen from "./components/pages/LoginScreen";
import ClientsScreen from "./components/pages/ClientsScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Clients: { screen: ClientsScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#0A79DF"
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const App = createAppContainer(MainNavigator);
export default App;
