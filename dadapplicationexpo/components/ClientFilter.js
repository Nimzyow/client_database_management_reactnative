import React, { useContext, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import ClientContext from "../Context/Client/ClientContext";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  TextInput
} from "native-base";

const ClientFilter = () => {
  const clientContext = useContext(ClientContext);

  const { filtered } = clientContext;

  return (
    <TextInput
      style={styles.searchBox}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Type here to search clients"
    />
  );
};

const styles = StyleSheet.create({
  searchBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 2
  }
});

export default ClientFilter;
