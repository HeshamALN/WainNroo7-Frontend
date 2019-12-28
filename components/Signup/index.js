import React, { Component } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

// Styling Components
import {
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  ImageBackground,
  DatePicker,
  Button,
  Platform
} from "react-native";

import { Text } from "native-base";
import styles from "./styles";

//store
import authStore from "../../stores/authStore";

import GenderPicker from "./GenderPicker";
import DatePickerr from "./DatePicker";
class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "Female",
    birth_date: null,
    showDatePicker: false
  };

  updateGender = gender => this.setState({ gender });

  componentDidMount() {
    if (authStore.user) this.props.navigation.navigate("List");
  }

  showDatePicker = () => {
    this.setState({
      showDatePicker: true
    });
  }

  setDate = (event, date) => {
    date = date || this.state.birth_date;

    this.setState({
      showDatePicker: Platform.OS === 'ios' ? true : false,
      birth_date: date,
    });
  }

  getReadableDate = birth_date => {
    return birth_date.getDate().toString() + '-' + (birth_date.getMonth() + 1).toString() + '-' + birth_date.getFullYear().toString()
  }

  render() {
    const { showDatePicker } = this.state;
    const { birth_date } = this.state;

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

          <TextInput
            style={styles.authTextInput}
            placeholder="Gender"
            placeholderTextColor="white"
            onChangeText={gender => this.setState({ gender })}
          />

          <TouchableOpacity
            style={styles.authTextInput}
            onPress={this.showDatePicker}
          > 
            <Text style={styles.authTextInput}>{birth_date ? this.getReadableDate(birth_date) : 'Birthday'}</Text>
          </TouchableOpacity>

          { showDatePicker && <DateTimePicker value={new Date()}
                    maximumDate={new Date(2005, 11, 31)}
                    display="default"
                    onChange={this.setDate} />}

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