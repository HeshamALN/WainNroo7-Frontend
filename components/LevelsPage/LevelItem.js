import React from "react";
import { withNavigation } from "react-navigation";
import { Icon } from "native-base";

const LevelItem = ({ level, navigation, thePlace }) => {
  const handlePress = () => {
    console.log(level.id);
    if (level.id == 1) {
      navigation.navigate("Difference", { DifferenceID: thePlace.difference });
    } else if (level.id == 2) {
      navigation.navigate("riddle", { RiddleID: thePlace.riddle });
    } else if (level.id == 3) {
      navigation.navigate("Trivia", { TriviaID: thePlace.trivia });
    }
  };
  const x = level.x;
  const y = level.y;
  console.log("x", x);
  return (
    <Icon
      name="location-pin"
      type="Entypo"
      style={{
        left: x,
        top: y,
        color: "transparent",
        position: "absolute",
        fontSize: "90"
      }}
      onPress={handlePress}
    />
  );
};

export default withNavigation(LevelItem);
