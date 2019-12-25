import React from "react";
import { observer } from "mobx-react";
//stores
import ProfileStore from "../../stores/profileStore";
state = {
  Male: require("../../assets/avatars/avatar.png"),
  Female: require("../../assets/avatars/avatar.png")
};
const AvatarSelect = () => {
  if (ProfileStore.profile.gender == "Male") return setSate(Male);
  else {
    return setSate(Female);
  }
};

export default observer(AvatarSelect);
