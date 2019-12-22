import React from "react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Card, CardItem, Text, Left, Body, Thumbnail } from "native-base";
import { Image, ImageBackground, View, TouchableOpacity } from "react-native";

const LevelItem = ({ level, navigation, thePlace }) => {
  // const handlePress = () => navigation.navigate("Game");
  return (
    <ImageBackground source={level.lockimg} style={{ width: null, flex: 1 }}>
      <View
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          right: 0,
          opacity: 0.5,
          backgroundColor: "grey",
          height: 200,
          width: 350
        }}
      />
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
            <TouchableOpacity>
              <Image source={level.img} style={{ height: 230, width: 350 }} />
            </TouchableOpacity>
            <Text>solve me to open the next level</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail source={level.coin} style={{ height: 25, width: 25 }} />
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
