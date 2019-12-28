import { StyleSheet, Dimensions } from "react-native";

const CIRCLE_RADIUS = 36;
const Window = Dimensions.get("window");
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    top: 35
  },
  dropZone: {
    height: 200,
    backgroundColor: "#2c3e50"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff"
  },
  draggableContainer: {
    // position: "absolute",
    top: Window.height / 2 - CIRCLE_RADIUS,
    left: Window.width / 2 - CIRCLE_RADIUS
  },
  circle: {
    backgroundColor: "#1abc9c",
    width: CIRCLE_RADIUS * 3,
    height: CIRCLE_RADIUS * 1.8,
    borderRadius: CIRCLE_RADIUS
  }
});
export default styles;
