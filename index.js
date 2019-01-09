import React from "react";
import Metrix from "@metrixorg/react-native-metrix";

import { AppRegistry } from "react-native";
import { FirstScreen, SecondScreen } from "./app/screen";

import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen }
});

class MetrixSample extends React.Component {
  constructor() {
    super();
    Metrix.initialize("wevudpiqxgzfrcv");
  }

  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent("MetrixSample", () => MetrixSample);
