import React, { Component } from "react";
import { Container, Button } from "native-base";
import { ImageBackground, Image, Text } from "react-native";
import styles from "../ListPage/styles";

class Timeout extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../assets/images/bg5.png")}
          style={styles.container}
        >
          <Image
            source={{
              uri: "https://metro.co.uk/wp-content/uploads/2016/03/time-out.png"
            }}
            style={{ width: 300, height: 300, alignSelf: "center", top: 200 }}
          ></Image>
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 30,
              top: 200
            }}
          >
            You're Out of Time!
          </Text>
          <Button
            rounded
            bordered
            light
            large
            onPress={() => this.props.navigation.navigate("List")}
            style={{
              top: 250,
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

export default Timeout;
