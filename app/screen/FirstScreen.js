import React from "react";
import Metrix from "@metrixorg/react-native-metrix";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class FirstScreen extends React.Component {
  constructor() {
    super();
    Metrix.screenDisplayed("First Screen");
    Metrix.newEvent("First Screen"); 
  }

  static navigationOptions = {
    title: "Metrix React Native Sample"
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Second")}
          >
          
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#33AAFF",
    padding: 10,
    margin: 10
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});
