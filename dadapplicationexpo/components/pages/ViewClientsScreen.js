import React from "react";
import { View, Text } from "react-native";

const ViewClientsScreen = props => {
  const name = props.navigation.getParam("name");
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default ViewClientsScreen;
