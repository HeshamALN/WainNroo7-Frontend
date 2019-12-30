import { StyleSheet } from "react-native";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 10
  },
  authButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 60,
    paddingLeft: 60
  },
  authOther: {
    color: "white"
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  authTitle: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "white"
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "white",
    fontSize: 16
  }
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 200,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});
export default styles;
