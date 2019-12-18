import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";

//stores
import data from "../../stores/triviadummy";

class Trivia extends Component {
  render() {
    let game = data.questions.forEach(obj => {
      <Text>obj.question</Text>;
    });
    const handlePress = () => this.props.navigation.navigate("Levels");
    return (
      <Container>
        <Content>{game}</Content>
      </Container>
    );
  }
}

export default Trivia;
