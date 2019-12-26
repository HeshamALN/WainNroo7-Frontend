import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { Alert, ImageBackground } from "react-native";
import {
  List,
  Content,
  Container,
  Icon,
  Text,
  Button,
  ListItem,
  H1,
  Spinner
} from "native-base";

//stores
import triviaStore from "../../stores/triviaStore";
import styles from "../ListPage/styles";

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
    const TriviaID = this.props.navigation.getParam("TriviaID");
    triviaStore.fetchAllData(TriviaID);
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
              this.props.navigation.navigate("List");
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
      this.setState({
        choice: this.state.choice + 1,
        totalScore: this.state.totalScore + score
      });
    } else this.props.navigation.navigate("Levels");
  };

  render() {
    if (triviaStore.loading) return <Spinner />;
    let choicee = this.state.choice;
    if (this.state.choice < 6) {
      return (
        <Container>
          <ImageBackground
            source={require("../../assets/images/bg5.png")}
            style={styles.container}
          >
            <Content style={{ top: 70, alignSelf: "center" }}>
              <>
                <Content>
                  <Icon
                    name="timer"
                    type="MaterialIcons"
                    style={{
                      color: "white",
                      alignSelf: "center",
                      fontSize: 50
                    }}
                  />
                  <H1
                    style={{
                      color: "white",
                      alignSelf: "center"
                    }}
                  >
                    {this.state.seconds}
                  </H1>
                </Content>

                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 30,
                    top: 5
                  }}
                >
                  {triviaStore.data.questions[choicee].question}
                </Text>
                <List
                  style={{
                    top: 20
                  }}
                >
                  {triviaStore.data.questions[choicee].answers.map(ans => (
                    <ListItem style={{ alignSelf: "center" }}>
                      <Button
                        rounded
                        bordered
                        dark
                        style={{
                          backgroundColor: "white",
                          alignSelf: "center"
                        }}
                        onPress={() => this.handleOnPress(ans.score)}
                      >
                        <Text> {`${this.state.choice} ${ans.answer}`}</Text>
                      </Button>
                    </ListItem>
                  ))}
                </List>
                <Button
                  rounded
                  bordered
                  light
                  large
                  style={{
                    top: 50,
                    fontSize: 50,
                    color: "white",
                    alignSelf: "center"
                  }}
                >
                  <Text> {`Score : ${this.state.totalScore}`}</Text>
                </Button>
              </>
            </Content>
          </ImageBackground>
        </Container>
      );
    } else {
      return (
        <Container>
          <ImageBackground
            source={require("../../assets/images/bg5.png")}
            style={styles.container}
          >
            <Content>
              <Text> {`Ur Total Score : ${this.state.totalScore}`}</Text>
              <Button onPress={this.handleOnPress}>
                <Text> {`${this.state.choice} Exit`}</Text>
              </Button>
            </Content>
          </ImageBackground>
        </Container>
      );
    }
  }
}

// LevelsList.navigationOptions = {
//   title: "وين نروح؟؟",
//   headerRight:
// };

export default observer(Trivia);
