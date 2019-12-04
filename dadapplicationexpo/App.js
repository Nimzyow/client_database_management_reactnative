import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import all screens
import HomeScreen from "./components/pages/HomeScreen";
import LoginScreen from "./components/pages/LoginScreen";
import ClientsScreen from "./components/pages/ClientsScreen";
import ViewClientsScreen from "./components/pages/ViewClientsScreen";

//import global states
import ClientState from "./Context/Client/ClientState";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: ClientsScreen },
    Login: { screen: LoginScreen },
    Clients: { screen: HomeScreen },
    View: { screen: ViewClientsScreen }
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

const AppContainer = createAppContainer(MainNavigator);
const App = () => {
  return (
    <ClientState>
      <AppContainer />
    </ClientState>
  );
};

export default App;
