import React, { useContext, useRef, useEffect } from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";

import ClientInfo from "../ClientsComponent/ClientsInfo";

//import global states
import ClientContext from "../../Context/Client/ClientContext";

const ClientsScreen = props => {
  const clientContext = useContext(ClientContext);

  const { filterClients, filtered } = clientContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const text = useRef("");

  const onChange = e => {
    filterClients(e);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Type here to search clients"
        onChangeText={text => onChange(text)}
      />
      <ScrollView>
        <ClientInfo navigation={props.navigation} />
        <View style={styles.empty}></View>
      </ScrollView>
    </View>
  );
};

ClientsScreen.navigationOptions = {
  title: "Clients"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  listItem: {
    flexDirection: "row",
    padding: 20
  },
  infoContainer: {
    flexDirection: "column"
  },
  iconInfoContainer: {
    flexDirection: "row",
    marginTop: 2
  },
  infoText: {
    fontSize: 20,
    fontWeight: "400"
  },
  searchBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 2
  },
  empty: {
    height: 300
  }
});

export default ClientsScreen;
