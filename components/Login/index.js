import React, { Component } from "react";
import { observer } from "mobx-react";
// Styling Components
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ImageBackground
} from "react-native";

// import styles from "./styles";
import styles from "./styles";

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
      <ImageBackground
        source={require("../../assets/images/bg7-min.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <View style={styles.authContainer}>
          <Text style={styles.authTitle}>Login</Text>
          <TextInput
            style={styles.authTextInput}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            placeholderTextColor="#f7f7f7"
          />
          <TextInput
            style={styles.authTextInput}
            placeholder="Password"
            placeholderTextColor="#f7f7f7"
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => authStore.login(this.state, this.props.navigation)}
          >
            <Text style={styles.authButtonText}>Submit</Text>
          </TouchableOpacity>
          <Text
            style={styles.authOther}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            Click here to register!
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

Login.navigationOptions = {
  title: "Login"
};

export default observer(Login);

// const styles = StyleSheet.create({
//   topContainer: {
//     flex: 2,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   authContainer: {
//     flex: 2,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   middleContainer: {
//     flex: 3,
//     justifyContent: "flex-start",
//     alignItems: "center"
//   },
//   bottomContainer: {
//     justifyContent: "flex-end",
//     width: "90%",
//     margin: 20,
//     padding: 10
//   }
// });
