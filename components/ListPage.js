import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
export default class ButtonTransparentExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button transparent>
            <Text>Location I</Text>
          </Button>
          <Button transparent>
            <Text>Location II</Text>
          </Button>
          <Button transparent>
            <Text>Location III</Text>
          </Button>
          <Button transparent>
            <Text>Location IV</Text>
          </Button>
          <Button transparent>
            <Text>Location V</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
