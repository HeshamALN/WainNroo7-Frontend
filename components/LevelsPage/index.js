import React from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { List, Content, Container } from "native-base";

//stores
import levelsStore from "../../stores/levelsStore";

import LevelItem from "./LevelItem";

const LevelsList = () => {
  const Listoflevels = levelsStore.levels.map(level => (
    <LevelItem level={level} key={level.id} />
  ));
  return (
    <Container>
      <Content>
        <List>{Listoflevels}</List>
      </Content>
    </Container>
  );
};

// LevelsList.navigationOptions = {
//   title: "وين نروح؟؟",
//   headerRight:
// };

export default observer(LevelsList);
