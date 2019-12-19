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
import levelsStore from "../../stores/levelsStore";
import data from "../../stores/triviadummy";

//components

class LevelsList extends Component {
  state = {
    choice: 0,
    seconds: 10
  };

  dec = () => {
    if (this.state.seconds > 0)
      this.setState({ seconds: this.state.seconds - 1 });
  };

  componentDidMount() {
    this.setState({ seconds: 10 });
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

  handleOnPress = () => {
    if (this.state.choice < 3) this.setState({ choice: this.state.choice + 1 });
    else this.props.navigation.navigate("Levels");
  };

  render() {
    let choicee = this.state.choice;
    if (this.state.choice < 3)
      return (
        <Container>
          <Content>
            <>
              <H1>{this.state.seconds}</H1>
              <Text>{data[0].questions[choicee].Question} </Text>
              <List>
                {data[0].questions[0].Answers.map(ans => (
                  <ListItem>
                    <Button onPress={this.handleOnPress}>
                      <Text> {`${this.state.choice} ${ans.answer}`}</Text>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </>
          </Content>
        </Container>
      );
    else
      return (
        <Container>
          <Content>
            <Button onPress={this.handleOnPress}>
              <Text> {`${this.state.choice} Exit`}</Text>
            </Button>
          </Content>
        </Container>
      );
  }
}

// LevelsList.navigationOptions = {
//   title: "وين نروح؟؟",
//   headerRight:
// };

export default observer(LevelsList);
