import React, { useContext, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { Card, Input } from "native-base";
import { Entypo } from "@expo/vector-icons";

//import global states
import ClientContext from "../../Context/Client/ClientContext";
import { TextInput } from "react-native-gesture-handler";

const ClientsScreen = props => {
  const clientContext = useContext(ClientContext);

  const { clients } = clientContext;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Type here to search clients"
      />
      <ScrollView>
        <View>
          <FlatList
            data={clients}
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
                    props.navigation.navigate("View", { name: item.name });
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
        </View>
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
