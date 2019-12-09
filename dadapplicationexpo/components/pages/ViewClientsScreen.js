import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Linking
} from "react-native";

import { Card, CardItem } from "native-base";

import { Entypo } from "@expo/vector-icons";

const ViewClientsScreen = props => {
  const name = props.navigation.getParam("name");
  const email = props.navigation.getParam("email");
  const numberAndStreet = props.navigation.getParam("numberAndStreet");
  const postCode = props.navigation.getParam("postCode");
  const proDes = props.navigation.getParam("proDes");
  const projNumber = props.navigation.getParam("projNumber");
  const phone = props.navigation.getParam("phone");

  const callAction = phone => {
    let phoneNumber = phone;
    if (Platform.OS !== "android") {
      phoneNumber = `telpromt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert("Phone number is not available");
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const smsAction = phone => {
    let phoneNumber = phone;
    phoneNumber = `sms:${phone}`;

    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert("Phone number is not available");
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.contactIconContainer}>
        <Text style={styles.contactIcon}>{name[0].toUpperCase()}</Text>
        <View style={styles.nameContainer}>
          <Text>{name}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Card>
          <CardItem bordered>
            <Text style={styles.infoText}>Email</Text>
          </CardItem>
          <CardItem>
            <Text style={styles.infoText}>{email}</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered>
            <Text style={styles.infoText}>Address</Text>
          </CardItem>
          <CardItem>
            <Text
              style={styles.infoText}
            >{`${numberAndStreet}, ${postCode}`}</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered>
            <Text style={styles.infoText}>Project Description</Text>
          </CardItem>
          <CardItem>
            <Text style={styles.infoText}>{proDes}</Text>
          </CardItem>
        </Card>
        {projNumber === "" ? null : (
          <Card>
            <CardItem bordered>
              <Text style={styles.infoText}>Project Number</Text>
            </CardItem>
            <CardItem>
              <Text style={styles.infoText}>{projNumber}</Text>
            </CardItem>
          </Card>
        )}
        <Card style={styles.actionContainer}>
          <CardItem style={styles.actionButton}>
            <TouchableOpacity
              onPress={() => {
                smsAction(phone);
              }}
            >
              <Entypo name="message" size={50} color="#0A79DF" />
            </TouchableOpacity>
          </CardItem>
          <CardItem style={styles.actionButton}>
            <TouchableOpacity
              onPress={() => {
                callAction(phone);
              }}
            >
              <Entypo name="phone" size={50} color="#0A79DF" />
            </TouchableOpacity>
          </CardItem>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contactIconContainer: {
    height: 200,
    backgroundColor: "#0A79DF",
    alignItems: "center",
    justifyContent: "center"
  },
  contactIcon: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#fff"
  },
  nameContainer: {
    width: "100%",
    height: 70,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  },
  name: {
    fontSize: 24,
    color: "#000",
    fontWeight: "900"
  },
  infoText: {
    fontSize: 18,
    fontWeight: "300"
  },
  actionContainer: {
    flexDirection: "row"
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#B83227",
    fontWeight: "900"
  },
  infoContainer: {
    flexDirection: "column"
  }
});

export default ViewClientsScreen;
