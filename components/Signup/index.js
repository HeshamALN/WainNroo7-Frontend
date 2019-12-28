import React, { Component } from "react";

// Styling Components
import {
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  ImageBackground,
  DatePicker
} from "react-native";

import { Text } from "native-base";
import styles from "./styles";

//store
import authStore from "../../stores/authStore";

import GenderPicker from "./GenderPicker";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "Female",
    birth_date: ""
  };

  updateGender = gender => this.setState({ gender });

  componentDidMount() {
    if (authStore.user) this.props.navigation.navigate("List");
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/bg6-min.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <View style={styles.authContainer}>
          <Text style={styles.authTitle}>Signup</Text>
          <TextInput
            style={styles.authTextInput}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.authTextInput}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.authTextInput}
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.authTextInput}
            placeholder="First name"
            placeholderTextColor="white"
            onChangeText={first_name => this.setState({ first_name })}
          />
          <TextInput
            style={styles.authTextInput}
            placeholder="Last name"
            placeholderTextColor="white"
            onChangeText={gender => this.setState({ gender })}
          />

          {/* <GenderPicker
            selectedValue={this.state.gender}
            onValueChange={this.updateGender.bind(this)}
          /> */}

          <TextInput
            style={styles.authTextInput}
            placeholder="Gender"
            placeholderTextColor="white"
            onChangeText={birth_date => this.setState({ birth_date })}
          />

          <TextInput
            style={styles.authTextInput}
            placeholder="Birthday"
            placeholderTextColor="white"
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
            <Text style={styles.authButtonText}>Submit</Text>
          </TouchableOpacity>
          <Text
            style={styles.authOther}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Click here to Login!
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

Signup.navigationOptions = {
  title: "Register"
};

export default Signup;
