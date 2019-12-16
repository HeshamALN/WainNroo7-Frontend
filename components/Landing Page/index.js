import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  ProgressViewIOS,
  StyleSheet,
  Logo
} from "react-native";
// import Logo from "./assets/chef.png";

import { StackNavigator } from "react-navigation";

export default class LandingPageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>Wain Nroo7</Text>
          <Text style={styles.h2}>Welcome to wain nroo7 game.. lol</Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={Logo} style={styles.image} />
        </View>
        <ProgressViewIOS number={1} />
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              style={styles.button}
              onPress={() => this.onPress()} //take him to register + question page
              color="#fff"
            />

            <Button
              title="already have an account?"
              style={styles.button}
              onPress={() => navigate("Login")} //take him to login page
              color="#fff"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  middleContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  bottomContainer: {
    justifyContent: "flex-end",
    width: "90%",
    margin: 20,
    padding: 10
  }
});
