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

class FirstQuestion extends Component {
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

            <TextInput
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
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.toggleModal(true);
          }}
        >
          <Text style={styles.text}>Play</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default FirstQuestion;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ede3f2",
    padding: 100
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fffff0",
    padding: 100
  },
  text: {
    color: "#3f2949",
    marginTop: 10
  }
});
