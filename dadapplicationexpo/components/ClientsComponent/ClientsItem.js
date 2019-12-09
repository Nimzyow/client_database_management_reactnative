import React, { Fragment, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { Card } from "native-base";
import { Entypo } from "@expo/vector-icons";
import ClientContext from "../../Context/Client/ClientContext";

const ClientsItem = props => {
  const clientContext = useContext(ClientContext);
  const { clearFilter } = clientContext;
  return (
    <Fragment>
      <FlatList
        data={props.data}
        renderItem={({ item }) => {
          let proDesLimit =
            item.proDes.length >= 42 ? (
              <Text style={styles.infoText}>
                {" "}
                {item.proDes.slice(0, 38)}...
              </Text>
            ) : (
              <Text style={styles.infoText}> {item.proDes}</Text>
            );
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("View", {
                  name: item.name,
                  email: item.email,
                  numberAndStreet: item.numberAndStreet,
                  secondLineAdd: item.secondLineAdd,
                  thirdLineAdd: item.thirdLineAdd,
                  postCode: item.postCode,
                  proDes: item.proDes,
                  projNumber: item.projNumber,
                  phone: item.phone
                });
              }}
            >
              <Card style={styles.listItem}>
                <View style={styles.infoContainer}>
                  <View style={styles.iconInfoContainer}>
                    <Entypo name="user" size={20} color="black" />
                    <Text style={styles.infoText}> {item.name}</Text>
                  </View>
                  <View style={styles.iconInfoContainer}>
                    <Entypo name="mail" size={20} color="black" />
                    <Text style={styles.infoText}> {item.email}</Text>
                  </View>
                  <View style={styles.iconInfoContainer}>
                    <Entypo name="text-document" size={20} color="black" />
                    {proDesLimit}
                  </View>
                  <View style={styles.iconInfoContainer}>
                    <Entypo name="list" size={20} color="black" />
                    <Text style={styles.infoText}> {item.projNumber}</Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => item.projNumber}
      />
    </Fragment>
  );
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

export default ClientsItem;
