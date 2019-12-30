import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { Spinner } from "native-base";
import styles from "./styles";
import listStore from "../../stores/listStore";
import Pin from "./Pins";
import { observer } from "mobx-react";

class List extends Component {
  render() {
    const Listofplaces = listStore.places.map(place => (
      <Pin place={place} key={place.id} />
    ));
    if (listStore.loading) return <Spinner />;
    return (
      <ImageBackground
        source={require("../../assets/images/map2.png")}
        style={styles.container}
        resizeMode="stretch"
      >
        <View style={styles.overlayContainer}>
          <View style={styles.topStyling}>{Listofplaces}</View>
        </View>
      </ImageBackground>
    );
  }
}

export default observer(List);
