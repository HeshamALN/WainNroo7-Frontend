import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
// import Logo from "./assets/chef.png";
import FirstQuestion from "../FirstQuestion/index";

class LandingPageScreen extends Component {
  // componentDidMount() {
  //   LandingStore.this.props.navigation.navigate("FirstQuestion");
  // }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.h1}>Wain Nroo7?</Text>
          <FirstQuestion navigation={this.props.navigation} />
          <Button
            title="already have an account?"
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Login")} //take him to login page
            color=""
          />
        </View>
      </View>
    );
  }
}
LandingPageScreen.navigationOptions = {
  title: "le landing page"
};
export default LandingPageScreen;

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
