import React, { Component } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

class GenderPicker extends Component {
  state = { user: "" };
  updateUser = user => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View>
        <Picker note mode="dropdown" style={{ width: 100 }}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        <Text style={styles.text}>{this.state.user}</Text>
      </View>
    );
  }
}
export default GenderPicker;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red"
  }
});
