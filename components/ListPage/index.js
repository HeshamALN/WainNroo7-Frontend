import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import styles from "./styles";
import listStore from "../../stores/listStore";
import Pin from "./Pins";

export default class List extends Component {
  render() {
    const Listofplaces = listStore.places.map(place => (
      <Pin place={place} key={place.id} />
    ));
    return (
      <ImageBackground
        source={require("../../assets/images/KW.png")}
        style={styles.container}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.topStyling}>{Listofplaces}</View>
        </View>
      </ImageBackground>
    );
  }
}
