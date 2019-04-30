import React from "react";
import Metrix from "@metrixorg/react-native-metrix";
import { StyleSheet, View, Text } from "react-native";

export default class FirstScreen extends React.Component {
  constructor() {
    super();
    Metrix.screenDisplayed("Second Screen");
    Metrix.newEvent("Second Screen");
    Metrix.newRevenue("revenue",233,1,"orderId");
  }

  static navigationOptions = {
    title: "Second Screen"
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>Second Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    top: 80,
    textAlign: "center"
  }
});
