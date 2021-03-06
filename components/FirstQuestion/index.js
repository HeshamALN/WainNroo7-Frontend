import React, { Component } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
  Alert,
  ImageBackground
} from "react-native";

class FirstQuestion extends Component {
  state = {
    modalVisible: false,
    answer: "",
    correctAnswer: "افنيوز"
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
          <ImageBackground
            source={require("../../assets/images/bg5.png")}
            style={{ flex: 1, width: "100%", height: "100%" }}
          >
            <View style={styles.modal}>
              <Text style={styles.text2}> شنو اسم اكبر مجمع بالكويت ؟</Text>
              <Text />
              <TextInput
                style={{
                  height: 50,
                  width: 200,
                  borderColor: "white",
                  borderWidth: 2,
                  color: "white",
                  textAlign: "center",
                  fontSize: 18
                }}
                onChangeText={text => this.setState({ answer: text })}
                value={this.state.answer}
              />
              <Text />

              <TouchableHighlight onPress={this.handleQuestion}>
                <Text style={styles.text3}>Answer</Text>
              </TouchableHighlight>
              <Text />
              <TouchableHighlight
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}
              >
                <Text style={styles.text3}>Back</Text>
              </TouchableHighlight>
            </View>
          </ImageBackground>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.toggleModal(true);
          }}
        >
          <Text style={styles.text}>START</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default FirstQuestion;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    top: 270,
    padding: 100
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 100,
    top: 155
  },
  text: {
    color: "#3f2949",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20
  },

  text2: {
    color: "white",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18
  },
  text3: {
    color: "white",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18
  }
});
