import React, { Component } from "react";
import { observer } from "mobx-react";
import { ImageBackground, Alert, Text, Image } from "react-native";
import { Spinner } from "native-base";

//stores
import differenceStore from "../../stores/differenceStore";

//items
import CircleItem from "./CircleItem";

//styles
import styles from "./styles";

class Difference extends Component {
  state = {
    seconds: 100,
    totalScore: 0,
    theDiff: null
  };
  dec = () => {
    if (this.state.seconds > 0)
      this.setState({ seconds: this.state.seconds - 1 });
  };

  componentDidMount() {
    this.setState({ seconds: 10 });
    this.interval = setInterval(this.dec, 1000);
    const DifferenceID = this.props.navigation.getParam("DifferenceID");
    differenceStore.fetchAllDifferences(DifferenceID);
  }

  render() {
    if (differenceStore.loading) return <Spinner />;
    const Circles = differenceStore.differences.coordinates.map(circle => (
      <CircleItem
        x={circle.xcoordinate}
        y={circle.ycoordinate}
        key={circle.id}
      />
    ));
    if (differenceStore.differences.diffs === differenceStore.diffcounter) {
      this.setState({ theDiff: differenceStore.differences });
      // this.setState({ theDiff }); same as above
    }
  }

  componentDidUpdate() {
    if (this.state.seconds === 0) {
      clearInterval(this.interval);
      Alert.alert(
        "T I M E",
        "O  U  T",
        [
          {
            text: " < Back",
            onPress: () => {
              this.props.navigation.navigate("List");
              console.log("OK Pressed");
            }
          }
        ],
        { cancelable: false }
      );
    } else if (this.state.theDiff.diffs === differenceStore.diffcounter) {
      clearInterval(this.interval);
      Alert.alert("Congratulations", "You Have Won !!", [{ text: "Yaay" }]);
    }
  }
  render() {
    if (!this.state.theDiff) return <Spinner />;
    const Circles = this.state.theDiff.coordinates.map(circle => (
      <CircleItem x={circle.x} y={circle.y} key={circle.id} />
    ));

    return (
      <ImageBackground
        source={require("../../assets/images/bkgd4.jpg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <Text style={styles.text1style}>
          Spot the differences between this picture and the actual view
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            top: 75,
            fontSize: 16
          }}
        >
          You have spotted : {differenceStore.diffcounter}/
          {this.state.theDiff.diffs}
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            top: 80,
            fontSize: 16
          }}
        >{`${this.state.seconds} seconds left !`}</Text>
        <Image
          source={{ uri: differenceStore.differences.img }}
          style={{ width: "99%", height: "77%", left: 2, right: 3, top: 85 }}
        />
        {Circles}
      </ImageBackground>
    );
  }
}
export default observer(Difference);
