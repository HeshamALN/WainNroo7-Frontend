import React, { Component } from "react";

// Styling Components
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Picker,
  DatePicker
} from "react-native";

import { Text } from "native-base";
// import styles from "./styles";

//store
import authStore from "../../stores/authStore";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "Male",
    birth_date: ""
  };

  updateGender = gender => {
    this.setState({ gender: gender });
  };

  componentDidMount() {
    if (authStore.user) this.props.navigation.navigate("List");
  }

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="email"
          placeholderTextColor="#A6AEC1"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="first_name"
          placeholderTextColor="#A6AEC1"
          onChangeText={first_name => this.setState({ first_name })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="last_name"
          placeholderTextColor="#A6AEC1"
          onChangeText={last_name => this.setState({ last_name })}
        />

        <Picker
          note
          mode="dropdown"
          style={{ width: 100 }}
          selectedValue={this.state.gender}
          onValueChange={this.updateGender.bind(this)}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>

        <TextInput
          style={styles.authTextInput}
          placeholder="birth_date"
          placeholderTextColor="#A6AEC1"
          onChangeText={birth_date => this.setState({ birth_date })}
        />
        {/* 
        <DatePicker
          minimumDate={new Date(1900, 1, 1)}
          maximumDate={new Date(2019, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="Select date"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={birth_date => this.setState({ birth_date })}
          disabled={false}
        />
        <Text>Date: {this.state.birth_date}</Text> */}

        <TouchableOpacity
          style={styles.authButton}
          onPress={() => authStore.signup(this.state, this.props.navigation)}
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Click here to Login!
        </Text>
      </View>
    );
  }
}

Signup.navigationOptions = {
  title: "Register"
};

export default Signup;

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  authContainer: {
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
