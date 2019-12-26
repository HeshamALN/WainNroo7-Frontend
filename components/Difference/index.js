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
  componentDidMount() {
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
          You have spoted : {differenceStore.diffcounter}/
          {differenceStore.differences.diffs}
        </Text>
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
