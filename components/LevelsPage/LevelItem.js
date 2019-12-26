import React from "react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Card, CardItem, Text, Left, Body, Thumbnail } from "native-base";
import { Image, ImageBackground, TouchableOpacity } from "react-native";

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
  return (
    <ImageBackground
      source={require("../../assets/images/black.jpg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              <Text>{level.name}</Text>
              <Text note>{thePlace.name}@</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <TouchableOpacity onPress={handlePress}>
              {level.id == 1 ? (
                <Image
                  source={level.img}
                  style={{ opacity: 0.7, height: 230, width: 350 }}
                />
              ) : (
                <ImageBackground
                  source={require("../../assets/images/Lock.jpg")}
                  style={{ opacity: 1, height: 240, width: 350 }}
                >
                  <Image
                    source={level.img}
                    style={{ opacity: 0.7, height: 230, width: 350 }}
                  />
                </ImageBackground>
              )}
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "bold",
                color: "#16126e"
              }}
            >
              solve me to open the next level
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail
              source={require("../../assets/images/fls.jpg")}
              style={{ height: 25, width: 25 }}
            />
            <Body>
              <Text
                style={{ fontSize: 14, color: "green", fontWeight: "bold" }}
              >
                {level.score}
              </Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </ImageBackground>
  );
};

export default withNavigation(LevelItem);
