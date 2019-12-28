import React, { Component } from "react";
import { observer } from "mobx-react";

import { View, Text, Animated, PanResponder } from "react-native";

//styles
import styles from "./styles";
import riddleStore from "../../stores/riddleStore";

class Riddle extends Component {
  state = {
    showDraggable: true,
    showDraggable2: true,
    dropZoneValues: null,
    pan: new Animated.ValueXY(),
    pan2: new Animated.ValueXY(),
    pan3: new Animated.ValueXY(),

    // initial: "Drop me hereeeee!"
    initial: 0
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }
    ]),

    onPanResponderRelease: (e, gesture) => {
      if (this.isDropZone(gesture)) {
        this.setState({
          showDraggable: false,
          initial: "you have dropped me"
        });
      } else {
        Animated.spring(this.state.pan, {
          setValue: { x: 0, y: 0 }
        }).start();
      }
    }
  });

  panResponder2 = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: this.state.pan2.x,
        dy: this.state.pan2.y
      }
    ]),

    onPanResponderRelease: (e, gesture) => {
      if (this.isDropZone(gesture)) {
        Animated.spring(this.state.pan2, {
          setValue: { x: -130, y: -200 }
        }).start();
      }
    }
  });

  isDropZone = gesture => {
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  };

  setDropZoneValues = event => {
    this.setState({
      dropZoneValues: event.nativeEvent.layout
    });
  };

  renderDraggable = () => {
    if (this.state.showDraggable) {
      return (
        <View style={styles.draggableContainer}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout(), styles.circle]}
          >
            <Text style={styles.text}>{riddleStore.riddles.answer}</Text>
          </Animated.View>
        </View>
      );
    }
  };

  renderDraggableTwo = () => {
    if (this.state.showDraggable2) {
      return (
        <View style={styles.draggableContainer}>
          <Animated.View
            {...this.panResponder2.panHandlers}
            style={[this.state.pan2.getLayout(), styles.circle]}
          >
            <Text style={styles.text}>{riddleStore.riddles.answer}</Text>
          </Animated.View>
        </View>
      );
    }
  };
  render() {
    const RiddleID = this.props.navigation.getParam("RiddleID");
    const theRiddle = riddleStore.data.find(
      theRiddle => RiddleID == theRiddle.id
    );
    console.log("RIDDLE RIDDLE RIDDLE", RiddleID);
    let initial = this.state.initial;
    return (
      <View style={styles.mainContainer}>
        <View
          onLayout={this.setDropZoneValues.bind(this)}
          style={styles.dropZone}
        >
          <Text style={styles.text}>
            {theRiddle.questions[initial].question}
          </Text>
        </View>
        {this.renderDraggable()}
        {this.renderDraggableTwo()}
      </View>
    );
  }
}

export default observer(Riddle);
