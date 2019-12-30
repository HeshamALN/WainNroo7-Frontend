import React, { Component } from "react";
import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-datepicker";

// Styling Components
import {
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Platform
} from "react-native";

import { Text } from "native-base";
import styles from "./styles";

//store
import authStore from "../../stores/authStore";

import GenderPicker from "./GenderPicker";
import DatePickerr from "./DatePicker";
import { HeaderStyleInterpolator } from "react-navigation-stack";
class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "Gender",
    birthday: "1992-05-03"
  };
  onChange = birthday => this.setState({ birthday });
  updateGender = gender => this.setState({ gender });

  componentDidMount() {
    // if (authStore.user) this.props.navigation.navigate("List");
  }

  render() {
    const { showDatePicker } = this.state;
    const { birthday } = this.state;

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
            onChangeText={last_name => this.setState({ last_name })}
          />

          {/* <GenderPicker
            selectedValue={this.state.gender}
            onValueChange={this.updateGender.bind(this)}
          /> */}
          <RNPickerSelect
            style={styles.authTextInput}
            onValueChange={gender => this.setState({ gender })}
            items={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" }
            ]}
          >
            <Text style={styles.authTextInput}>{this.state.gender}</Text>
          </RNPickerSelect>

          <DatePicker
            style={styles.authTextInput}
            date={this.state.date}
            showIcon="flase"
            mode="date"
            placeholder="Birthday" // LAYLA LOOK HERE, PLZ
            format="YYYY-MM-DD"
            minDate="1980-01-01"
            maxDate="2000-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onChangeText={birthday => this.setState({ birthday })}
          >
            <Text style={styles.authTextInput}>{this.state.birthday}</Text>
          </DatePicker>

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
console.log(this.birthday);
console.log(this.gender);

Signup.navigationOptions = {
  title: "Register"
};

export default Signup;
