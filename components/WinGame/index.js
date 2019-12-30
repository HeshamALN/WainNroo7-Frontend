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
            dark
            large
            onPress={() => this.props.navigation.navigate("List")}
            style={{
              backgroundColor: "white",
              alignSelf: "center",
              top: 600,
              fontSize: 70,
              textAlign: "center",
              width: 100,
              height: 50
            }}
          >
            <Text style={{ textAlign: "center", color: "green" }}>
              Go Back !
            </Text>
          </Button>
        </ImageBackground>
      </Container>
    );
  }
}

export default WinGame;
