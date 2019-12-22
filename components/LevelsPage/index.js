import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { List, Content, Container } from "native-base";

//stores
import levelsStore from "../../stores/levelsStore";
import listStore from "../../stores/listStore";

import LevelItem from "./LevelItem";

class LevelsList extends Component {
  render() {
    const placeID = this.props.navigation.getParam("placeID");
    const thePlace = listStore.places.find(thePlace => placeID === thePlace.id);
    // console.log(placeID);
    const Listoflevels = levelsStore.levels.map(level => (
      <LevelItem level={level} key={level.id} thePlace={thePlace} />
    ));
    return (
      <Container>
        <Content>
          <List>{Listoflevels}</List>
        </Content>
      </Container>
    );
  }
}

export default observer(LevelsList);
