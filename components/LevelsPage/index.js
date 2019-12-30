import React, { Component } from "react";
import { observer } from "mobx-react";
import { ImageBackground, View } from "react-native";

//stores
import levelsStore from "../../stores/levelsStore";
import listStore from "../../stores/listStore";

import LevelItem from "./LevelItem";

import styles from "./styles";

class LevelsList extends Component {
  render() {
    const placeID = this.props.navigation.getParam("placeID");
    const thePlace = listStore.places.find(thePlace => placeID === thePlace.id);
    console.log(placeID);
    console.log(thePlace.name);
    const Listoflevels = levelsStore.levels.map(level => (
      <LevelItem level={level} key={level.id} thePlace={thePlace} />
    ));
    return (
      <ImageBackground
        source={require("../../assets/images/games.png")}
        style={styles.container}
        resizeMode="stretch"
      >
        <View style={styles.overlayContainer}>
          <View style={styles.topStyling}>{Listoflevels}</View>
        </View>
      </ImageBackground>
    );
  }
}

export default observer(LevelsList);
