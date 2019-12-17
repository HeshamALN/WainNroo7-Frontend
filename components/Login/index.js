import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import { Text } from "native-base";
// import styles from "./styles";

//store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    if (authStore.user) this.props.navigation.navigate("List");
  }

  render() {
    return (
      <>
        <View style={styles.authContainer}>
          <Text style={styles.authTitle}>Login</Text>
          <TextInput
            style={styles.authTextInput}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            placeholderTextColor="#A6AEC1"
          />
          <TextInput
            style={styles.authTextInput}
            placeholder="Password"
            placeholderTextColor="#A6AEC1"
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => authStore.login(this.state, this.props.navigation)}
          >
            <Text style={styles.authButtonText}>Log in</Text>
          </TouchableOpacity>
          <Text
            style={styles.authOther}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            Click here to register!
          </Text>
        </View>
      </>
    );
  }
}

Login.navigationOptions = {
  title: "Login"
};

export default Login;

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  middleContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  bottomContainer: {
    justifyContent: "flex-end",
    width: "90%",
    margin: 20,
    padding: 10
  }
});
