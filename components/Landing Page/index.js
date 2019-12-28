import React, { Component } from "react";
import { Text, View, ImageBackground, Button, StyleSheet } from "react-native";
// import Logo from "./assets/chef.png";
import FirstQuestion from "../FirstQuestion/index";

class LandingPageScreen extends Component {
  // componentDidMount() {
  //   LandingStore.this.props.navigation.navigate("FirstQuestion");
  // }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/homepage.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <FirstQuestion navigation={this.props.navigation} />
        <View style={styles.topContainer}>
          <Button
            title="Already have an account?"
            onPress={() => this.props.navigation.navigate("Login")} //take him to login page
            color="#289486"
          />
        </View>
      </ImageBackground>
    );
  }
}
// LandingPageScreen.navigationOptions = {
//   title: "le landing page"
// };
export default LandingPageScreen;

const styles = StyleSheet.create({
  topContainer: {
    top: 190
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
