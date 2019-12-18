import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";

export default class List extends Component {
  render() {
    const handlePress = () => this.props.navigation.navigate("Levels");
    return (
      <Container>
        <Content>
          <Button
            transparent
            onPress={handlePress}
            style={{ marginLeft: 130, marginBottom: 20, marginTop: 30 }}
          >
            <Text>Location I</Text>
          </Button>
          <Button
            transparent
            onPress={handlePress}
            style={{ marginLeft: 130, marginBottom: 20 }}
          >
            <Text>Location II</Text>
          </Button>
          <Button
            transparent
            onPress={handlePress}
            style={{ marginLeft: 130, marginBottom: 20 }}
          >
            <Text>Location III</Text>
          </Button>
          <Button
            transparent
            onPress={handlePress}
            style={{ marginLeft: 130, marginBottom: 20 }}
          >
            <Text>Location IV</Text>
          </Button>
          <Button
            transparent
            onPress={handlePress}
            style={{ marginLeft: 130, marginBottom: 20 }}
          >
            <Text>Location V</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
