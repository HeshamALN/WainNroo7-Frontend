import React, { Component } from "react";
import { observer } from "mobx-react";
import { ImageBackground, Alert, Text, Image, View } from "react-native";
import { Spinner } from "native-base";

//stores
import differenceStore from "../../stores/differenceStore";

//items
import CircleItem from "./CircleItem";

//styles
import styles from "./styles";

class Difference extends Component {
  state = {
    seconds: 15,
    totalScore: 0,
    theDiff: null
  };
  dec = () => {
    if (this.state.seconds > 0)
      this.setState({ seconds: this.state.seconds - 1 });
  };

  // resetFields = () => {
  //   this.setState({});
  // };

  componentDidMount() {
    this.setState({ seconds: 15 });
    differenceStore.diffcounter = 0;
    this.interval = setInterval(this.dec, 1000);
    const DifferenceID = this.props.navigation.getParam("DifferenceID");
    differenceStore.fetchAllDifferences(DifferenceID);
  }
  componentDidUpdate() {
    if (this.state.seconds === 0) {
      clearInterval(this.interval);
      this.props.navigation.navigate("Timeout");
    }
  }

  render() {
    if (differenceStore.loading) return <Spinner />;
    const Circles = differenceStore.differences.coordinates.map(circle => (
      <CircleItem
        x={circle.xcoordinate}
        y={circle.ycoordinate}
        key={`${circle.xcoordinate} ${circle.ycoordinate}`}
      />
    ));
    if (differenceStore.differences.diffs === differenceStore.diffcounter) {
      clearInterval(this.interval);
      Alert.alert("Congratulations", "You Have Won !!", [{ text: "Yaay" }]);
    }
    return (
      <ImageBackground
        source={require("../../assets/images/bg5.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <View style={{ flexDirection: "row", alignSelf: "center", top: 50 }}>
          <Image
            source={require("../../assets/images/timer.png")}
            style={{ width: 70, height: 70, alignSelf: "center" }}
          />
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 50
            }}
          >
            {this.state.seconds}
          </Text>
        </View>
        <Image
          source={{ uri: differenceStore.differences.img }}
          style={{ width: "88%", height: "66%", alignSelf: "center", top: 70 }}
        />
        {Circles}
        <Text style={styles.text2style}>
          You have spoted : {differenceStore.diffcounter}/
          {differenceStore.differences.diffs}
        </Text>
      </ImageBackground>
    );
  }
}
export default observer(Difference);
