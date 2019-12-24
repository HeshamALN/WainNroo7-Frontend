import React, { Component } from "react";
import { observer } from "mobx-react";
import { ImageBackground, Alert, Text, Image } from "react-native";
import CircleItem from "./CircleItem";
import differenceStore from "../../stores/differenceStore";
import styles from "./styles";

class Difference extends Component {
  render() {
    const DifferenceID = this.props.navigation.getParam("DifferenceID");
    const theDiff = differenceStore.differences.find(
      theDiff => DifferenceID == theDiff.id
    );
    const Circles = theDiff.coordinates.map(circle => (
      <CircleItem
        x={circle.xcoordinate}
        y={circle.ycoordinate}
        key={circle.id}
      />
    ));
    if (theDiff.diffs === differenceStore.diffcounter) {
      Alert.alert("Congratulations", "You Have Won !!", [{ text: "Yaay" }]);
    }
    return (
      <ImageBackground
        source={require("../../assets/images/bkgd4.jpg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <Text style={styles.text1style}>
          Spot the differences between this picture and the actual view
        </Text>
        <Text style={styles.text2style}>
          You have spoted : {differenceStore.diffcounter}/{theDiff.diffs}
        </Text>
        <Image
          source={{ uri: theDiff.img }}
          style={{ width: "99%", height: "77%", left: 2, right: 3, top: 85 }}
        />
        {Circles}
      </ImageBackground>
    );
  }
}
export default observer(Difference);
