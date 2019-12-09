import React, { useContext, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import ClientItem from "./ClientsItem";
import ClientContext from "../../Context/Client/ClientContext";

const ClientsInfo = props => {
  const clientContext = useContext(ClientContext);

  const { clients, filtered } = clientContext;

  return (
    <Fragment>
      {clients !== null ? (
        <View>
          {filtered !== null ? (
            <ClientItem data={filtered} navigation={props.navigation} />
          ) : (
            <ClientItem data={clients} navigation={props.navigation} />
          )}
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>Loading...</Text>
        </View>
      )}
    </Fragment>
  );
};

export default ClientsInfo;
