import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";

class Draggable extends Component {
  state = {
    showDraggable: true,
    dropAreaValues: null,
    pan1: new Animated.ValueXY(),
    pan2: new Animated.ValueXY(),
    pan3: new Animated.ValueXY(),
    pan4: new Animated.ValueXY(),
    pan5: new Animated.ValueXY(),
    opacity: new Animated.Value(1)
  };

  componentWillMount() {
    this._val = { x: 0, y: 0 };
    this.state.pan1.addListener(value => (this._val = value));
    this.state.pan2.addListener(value => (this._val = value));
    this.state.pan3.addListener(value => (this._val = value));
    this.state.pan4.addListener(value => (this._val = value));
    this.state.pan5.addListener(value => (this._val = value));

    this.panResponder1 = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan1.setOffset({
          x: this._val.x,
          y: this._val.y
        });
        this.state.pan1.setValue({ x: 100, y: 100 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan1.x, dy: this.state.pan1.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 600
          }).start(() =>
            this.setState({
              showDraggable: false
            })
          );
          alert("Not the correct answer!");
        }
      }
    });

    this.panResponder2 = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan2.setOffset({
          x: this._val.x,
          y: this._val.y
        });
        this.state.pan2.setValue({ x: 200, y: 200 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan2.x, dy: this.state.pan2.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 600
          }).start(() =>
            this.setState({
              showDraggable: false
            })
          );
          alert("Not the correct answer!");
        }
      }
    });

    this.panResponder3 = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan3.setOffset({
          x: this._val.x,
          y: this._val.y
        });
        this.state.pan3.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan3.x, dy: this.state.pan3.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 600
          }).start(() =>
            this.setState({
              showDraggable: false
            })
          );
          alert("Not the correct answer!");
        }
      }
    });

    this.panResponder4 = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan4.setOffset({
          x: this._val.x,
          y: this._val.y
        });
        this.state.pan4.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan4.x, dy: this.state.pan4.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 600
          }).start(() =>
            this.setState({
              showDraggable: false
            })
          );
          alert("Not the correct answer!");
        }
      }
    });
  }

  isDropArea = gesture => {
    return gesture.moveY < 200;
  };

  render() {
    return (
      <View style={{ width: "20%", flexDirection: "row" }}>
        <Text style={{ width: "20%" }}></Text>

        {this.renderDraggable1()}
        <Text style={{ width: "20%" }}></Text>
        {this.renderDraggable1()}
        <Text style={{ width: "20%" }}></Text>
        {this.renderDraggable2()}
        <Text style={{ width: "20%" }}></Text>
        {this.renderDraggable3()}
        <Text style={{ width: "20%" }}></Text>
        {this.renderDraggable4()}
      </View>
    );
  }

  renderDraggable1 = () => {
    const panStyle = {
      transform: this.state.pan1.getTranslateTransform()
    };
    if (this.state.showDraggable) {
      return (
        <View>
          <Animated.View
            {...this.panResponder1.panHandlers}
            style={[panStyle, styles.circle, { opacity: this.state.opacity }]}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
              hehehe3
            </Text>
          </Animated.View>
        </View>
      );
    }
  };

  renderDraggable2 = () => {
    const panStyle = {
      transform: this.state.pan2.getTranslateTransform()
    };
    if (this.state.showDraggable) {
      return (
        <View>
          <Animated.View
            {...this.panResponder2.panHandlers}
            style={[panStyle, styles.circle, { opacity: this.state.opacity }]}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
              hehehe3
            </Text>
          </Animated.View>
        </View>
      );
    }
  };

  renderDraggable3 = () => {
    const panStyle = {
      transform: this.state.pan3.getTranslateTransform()
    };
    if (this.state.showDraggable) {
      return (
        <View>
          <Animated.View
            {...this.panResponder3.panHandlers}
            style={[panStyle, styles.circle, { opacity: this.state.opacity }]}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
              hehehe3
            </Text>
          </Animated.View>
        </View>
      );
    }
  };

  renderDraggable4 = () => {
    const panStyle = {
      transform: this.state.pan4.getTranslateTransform()
    };
    if (this.state.showDraggable) {
      return (
        <View>
          <Animated.View
            {...this.panResponder4.panHandlers}
            style={[panStyle, styles.circle, { opacity: this.state.opacity }]}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
              hehehe3
            </Text>
          </Animated.View>
        </View>
      );
    }
  };
}
export default Draggable;

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height: 200
  },
  circle: {
    backgroundColor: "transparent",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "column"
  },
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});
