import React from "react";
import { withNavigation } from "react-navigation";
import { Icon } from "native-base";

const Pins = ({ place, navigation }) => {
  const handlePress = () =>
    navigation.navigate("Levels", { placeID: place.id, placeName: place.name });
  const x = place.xcoordinate;
  const y = place.ycoordinate;
  return (
    <Icon
      name="location-pin"
      type="Entypo"
      style={{
        left: x,
        top: y,
        color: "red",
        position: "absolute"
      }}
      onPress={handlePress}
    />
  );
};

export default withNavigation(Pins);
