import React, { Component } from "react";
import { Icon, Button } from "native-base";
import differenceStore from "../../stores/differenceStore";
import { observer } from "mobx-react";
import { Text } from "react-native";

class CircleItem extends Component {
  state = {
    invisible: true
  };
  handlePress = () => {
    this.setState({
      invisible: false
    });

    differenceStore.countDifferences();
  };
  render() {
    return (
      <>
        {this.state.invisible ? (
          <Button
            onPress={this.handlePress}
            style={{
              left: this.props.x,
              top: this.props.y,
              position: "absolute"
            }}
            transparent
          >
            <Text style={{ color: "transparent" }}>Hesham</Text>
          </Button>
        ) : (
          <Icon
            name="circle"
            type="Entypo"
            style={{
              left: this.props.x,
              top: this.props.y,
              color: "#043570",
              position: "absolute"
            }}
          />
        )}
      </>
    );
  }
}
export default observer(CircleItem);
