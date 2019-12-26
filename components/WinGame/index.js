import React, { Component } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
  Alert
} from "react-native";

class WinGame extends Component {
  state = {
    modalVisible: false,
    answer: "",
    correctAnswer: 2
  };
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  handleQuestion = () => {
    const answer = this.state.answer;
    const correctAnswer = this.state.correctAnswer;
    if (answer != correctAnswer) alert("Wrong Answer.");
    else {
      Alert.alert(
        "Congrats!",
        "Your answer is correct!",
        [
          {
            text: "Sign up",
            onPress: () => {
              this.toggleModal(false);
              this.props.navigation.navigate("Signup");
              // this.props.navigation.navigate("HomeStack");
            }
          }
        ],
        { cancelable: false }
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modal}>
            <Text style={styles.text}> 1+1=? </Text>

            {/* <TextInput
              style={{
                height: 20,
                width: 200,
                borderColor: "black",
                borderWidth: 1,
                color: "black"
              }}
              onChangeText={text => this.setState({ answer: text })}
              value={this.state.answer}
            />

            <TouchableHighlight onPress={this.handleQuestion}>
              <Text style={styles.text}>Answer</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.toggleModal(!this.state.modalVisible);
              }}
            >
              <Text style={styles.text}>Back</Text>
            </TouchableHighlight> */}
          </View>
        </Modal>
      </View>
    );
  }
}
export default WinGame;

const styles = StyleSheet.create({
  container: {},
  modal: {
    flex: 1,
    alignItems: "center",
    padding: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
    fontSize: 30
  }
});
