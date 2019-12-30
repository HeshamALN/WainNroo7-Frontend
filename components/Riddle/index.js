import React, { Component } from "react";
import { View, Text, Animated, PanResponder } from "react-native";

//styles
import styles from "./styles";

export default class Riddle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
      pan2: new Animated.ValueXY(),

      initial: "Drop me hereeeee!"
    };

    this.panResponder = PanResponder.create({
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
          Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
        }
      }
    });

    this.panResponder2 = PanResponder.create({
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
          alert("not the right answer! hehe.")
          Animated.spring(this.state.pan, { setValue: { x: 0, y: 0 } }).start();
        }
      }
    });
  }

  isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View
          onLayout={this.setDropZoneValues.bind(this)}
          style={styles.dropZone}
        >
          <Text style={styles.text}>{this.state.initial}</Text>
        </View>

        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    if (this.state.showDraggable) {
      return (
        <View style={styles.draggableContainer}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout(), styles.circle]}
          >
            <Text style={styles.text}>Drag me!</Text>
          </Animated.View>
          <Animated.View
            {...this.panResponder2.panHandlers}
            style={[this.state.pan2.getLayout(), styles.circle]}
          >
            <Text style={styles.text}>Dont Drag me!</Text>
          </Animated.View>
        </View>
      );
    }
  }
}
