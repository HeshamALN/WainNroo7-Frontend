import React, { Component } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet
} from "react-native";
class FirstQuestion extends Component {
  state = {
    modalVisible: false
  };
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const [value, onChangeText] = "Useless Placeholder";
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
            <Text style={styles.text}>heheheh</Text>

            <TextInput
              style={{
                height: 20,
                width: 200,
                borderColor: "gray",
                borderWidth: 1
              }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />

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
