import React from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";

import { Form, Input, Label, Button, Item } from "native-base";

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView>
      <View style={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={() => {}}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType={"visible-password"}
              onChangeText={() => {}}
            />
          </Item>
          <Button style={styles.button} full rounded onPress={() => {}}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Button>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

HomeScreen.navigationOptions = {
  title: "Engineering Client App"
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    color: "#fff"
  }
});

export default HomeScreen;
