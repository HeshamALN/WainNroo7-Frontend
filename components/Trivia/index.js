import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { Alert } from "react-native";
import {
  List,
  Content,
  Container,
  Text,
  Button,
  ListItem,
  H1
} from "native-base";

//stores
import triviaStore from "../../stores/triviaStore";

//components

class Trivia extends Component {
  state = {
    choice: 0,
    seconds: 10,
    totalScore: 0
  };

  dec = () => {
    if (this.state.seconds > 0)
      this.setState({ seconds: this.state.seconds - 1 });
  };

  componentDidMount() {
    this.setState({ choice: 0, seconds: 10 });
    this.interval = setInterval(this.dec, 1000);
  }

  componentDidUpdate() {
    if (this.state.seconds === 0) {
      clearInterval(this.interval);
      Alert.alert(
        "T I M E",
        "O  U  T",
        [
          {
            text: " < Back",
            onPress: () => {
              this.props.navigation.navigate("Levels");
              console.log("OK Pressed");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

  handleOnPress = async score => {
    if (this.state.choice < 6) {
      await this.setState({ choice: this.state.choice + 1 });
      this.setState({ totalScore: this.state.totalScore + score });
    } else this.props.navigation.navigate("Levels");
  };

  render() {
    const TriviaID = this.props.navigation.getParam("TriviaID");
    const theTrivia = triviaStore.data.find(
      theTrivia => TriviaID == theTrivia.id
    );
    let choicee = this.state.choice;
    if (this.state.choice < 6) {
      return (
        <Container>
          <Content>
            <>
              <H1>{this.state.seconds}</H1>
              <Text> {`Score : ${this.state.totalScore}`}</Text>
              <Text>{theTrivia.questions[choicee].question} </Text>
              <List>
                {theTrivia.questions[choicee].answers.map(ans => (
                  <ListItem>
                    <Button onPress={() => this.handleOnPress(ans.score)}>
                      <Text> {`${this.state.choice} ${ans.answer}`}</Text>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </>
          </Content>
        </Container>
      );
    } else {
      return (
        <Container>
          <Content>
            <Text> {`Ur Total Score : ${this.state.totalScore}`}</Text>
            <Button onPress={this.handleOnPress}>
              <Text> {`${this.state.choice} Exit`}</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  }
}

export default observer(Trivia);
