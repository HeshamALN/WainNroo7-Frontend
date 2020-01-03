import React, { Component } from "react";
import { Container, Button } from "native-base";
import { ImageBackground, Text } from "react-native";
import styles from "../ListPage/styles";

class WinGame extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../assets/images/won.png")}
          style={styles.container}
        >
          <Button
            rounded
            bordered
            light
            large
            onPress={() => this.props.navigation.navigate("List")}
            style={{
              top: 600,
              fontSize: 50,
              color: "white",
              alignSelf: "center"
            }}
          >
            <Text style={{ color: "white" }}>Go Back !</Text>
          </Button>
        </ImageBackground>
      </Container>
    );
  }
}

export default WinGame;
