import React from "react";

import { Button, Text } from "native-base";
import { withNavigation } from "react-navigation";

import { StyleSheet } from "react-native";

//stores
import AuthStore from "../../stores/authStore";
const Logout = ({ navigation }) => {
  return (
    <Button
      danger
      rounded
      bordered
      Light
      onPress={() => AuthStore.logout(navigation)}
    >
      <Text style={styles.logout}>Logout</Text>
    </Button>
  );
};
export default withNavigation(Logout);

const styles = StyleSheet.create({
  logout: {
    color: "black"
  }
});
