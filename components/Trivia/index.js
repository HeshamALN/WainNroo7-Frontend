import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { ImageBackground, Image, View } from "react-native";
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
    seconds: 30,
    totalScore: 0,
    modalVisible: false
  };

  dec = () => {
    if (this.state.seconds > 0)
      this.setState({ seconds: this.state.seconds - 1 });
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  componentDidMount() {
    const TriviaID = this.props.navigation.getParam("TriviaID");
    triviaStore.fetchAllData(TriviaID);
    this.setState({ choice: 0, seconds: 20 });
    this.interval = setInterval(this.dec, 1000);
  }

  componentDidUpdate() {
    if (this.state.seconds === 0) {
      clearInterval(this.interval);
      this.props.navigation.navigate("Timeout");
    }
  }

  handleOnPress = async score => {
    if (this.state.choice <= 5) {
      this.setState({
        choice: this.state.choice + 1,
        totalScore: this.state.totalScore + score
      });
    } else {
      this.setState({
        totalScore: this.state.totalScore + score
      });
      this.toggleModal();
    }
  };

  render() {
    if (triviaStore.loading) return <Spinner />;
    let choicee = this.state.choice;
    if (choicee < 6) {
      return (
        <Container>
          <ImageBackground
            source={require("../../assets/images/bg5.png")}
            style={styles.container}
          >
            <Content style={{ top: 20, alignSelf: "center" }}>
              <>
                <View
                  style={{ flex: 1, flexDirection: "row", alignSelf: "center" }}
                >
                  <Image
                    source={require("../../assets/images/timer.png")}
                    style={{ width: 70, height: 70, alignSelf: "center" }}
                  />
                  <Text
                    style={{
                      color: "white",
                      alignSelf: "center",
                      fontSize: 50
                    }}
                  >
                    {this.state.seconds}
                  </Text>
                </View>

                {this.state.choice < 6 && (
                  <>
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 20,
                        top: 50
                      }}
                    >
                      {triviaStore.data.questions[choicee].question}
                    </Text>
                    <List
                      style={{
                        top: 70
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
                  </>
                )}
                <Button
                  rounded
                  bordered
                  light
                  large
                  style={{
                    top: 100,
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
    } else
      return (
        <Container>
          {this.state.totalScore === 60 ? (
            <ImageBackground
              source={require("../../assets/images/won.png")}
              style={styles.container}
            >
              <Content style={{ top: 70, alignSelf: "center" }}>
                {clearInterval(this.interval)}
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    top: 450,
                    fontSize: 20
                  }}
                >{`Your Total Score : ${this.state.totalScore}`}</Text>
                <Button
                  rounded
                  bordered
                  light
                  large
                  onPress={() => this.props.navigation.navigate("List")}
                  style={{
                    top: 470,
                    fontSize: 50,
                    color: "white",
                    alignSelf: "center"
                  }}
                >
                  <Text style={{ color: "white" }}>Go Back !</Text>
                </Button>
              </Content>
            </ImageBackground>
          ) : (
            <ImageBackground
              source={require("../../assets/images/lost.png")}
              style={styles.container}
            >
              <Content style={{ top: 70, alignSelf: "center" }}>
                {clearInterval(this.interval)}
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    top: 400,
                    fontSize: 20
                  }}
                >{`Your Total Score : ${this.state.totalScore}`}</Text>
                <Button
                  rounded
                  bordered
                  light
                  large
                  onPress={() => this.props.navigation.navigate("List")}
                  style={{
                    top: 450,
                    fontSize: 50,
                    color: "white",
                    alignSelf: "center"
                  }}
                >
                  <Text style={{ color: "white" }}>Go Back !</Text>
                </Button>
              </Content>
            </ImageBackground>
          )}
        </Container>
      );
  }
}

// LevelsList.navigationOptions = {
//   title: "وين نروح؟؟",
//   headerRight:
// };

export default observer(Trivia);
