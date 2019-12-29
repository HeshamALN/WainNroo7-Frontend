import React, { Component } from "react";
import { observer } from "mobx-react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Header,
  Left,
  Button,
  Icon,
  Container,
  Body,
  Title,
  Right
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import Logout from "../Logout/index";

//stores
import authStore from "../../stores/authStore";
import ProfileStore from "../../stores/profileStore";

const { width, height } = Dimensions.get("screen");

// const scoreBoard = [
//   {
//     title: "Score",
//     content: "Your score: /n Your score: /n Your score: /n"
//   }
// ];
class ProfileScreen extends Component {
  async componentDidMount() {
    if (authStore.user) await profileStore.fetchProfile();
  }

  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: "25%" }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={require("../../assets/avatars/avatar.png")}
                  style={styles.avatar}
                />
              </Block>
              <Block style={styles.info}></Block>
              <Block row space="between">
                <Block middle>
                  <Text
                    bold
                    size={12}
                    color="#525F7F"
                    style={{ marginBottom: 4 }}
                  >
                    2K
                  </Text>
                  <Text size={12}>Orders</Text>
                </Block>
                <Block middle>
                  <Text
                    bold
                    color="#525F7F"
                    size={12}
                    style={{ marginBottom: 4 }}
                  >
                    10
                  </Text>
                  <Text size={12}>Photos</Text>
                </Block>
                <Block middle>
                  <Text
                    bold
                    color="#525F7F"
                    size={12}
                    style={{ marginBottom: 4 }}
                  >
                    89
                  </Text>
                  <Text size={12}>Comments</Text>
                </Block>
              </Block>
            </Block>
            <Block flex>
              <Block middle style={styles.nameInfo}>
                <Text bold size={28} color="#32325D">
                  {ProfileStore.profile.username}, {ProfileStore.age}
                </Text>
              </Block>
              <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                <Block style={styles.divider} />
              </Block>
              <Block middle>
                <Text size={16} color="#525F7F" style={{ textAlign: "center" }}>
                  About About About About About About About About About About
                </Text>
                <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block middle style={styles.infoInfo}>
                  <Text bold size={15} color="#32325D">
                    First Name: {ProfileStore.profile.first_name}
                  </Text>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Text bold size={15} color="#32325D">
                    Last Name: {ProfileStore.profile.last_name}
                  </Text>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Text bold size={15} color="#32325D">
                    email: {ProfileStore.profile.email}
                  </Text>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Text bold size={15} color="#32325D">
                    Date of birth: {ProfileStore.profile.birth_day}
                    {/* Age: {getAge} */}
                  </Text>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Text bold size={15} color="#32325D">
                    Gender: {ProfileStore.profile.gender}
                  </Text>
                  <Text bold size={15} color="#32325D">
                    Score: {ProfileStore.profile.total_score}
                  </Text>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                </Block>
                <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>

                {/* <Accordion
                  dataArray={scoreBoard}
                  icon="add"
                  expandedIcon="remove"
                  iconStyle={{ color: "green" }}
                  expandedIconStyle={{ color: "red" }}
                /> */}
              </Block>
            </Block>
            <Logout style={styles.logout} />
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

export default observer(ProfileScreen);

const styles = StyleSheet.create({
  profile: {
    // marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  infoInfo: {
    marginRight: 300
    // marginTop: 90
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  logout: {
    marginBottom: 100
  }
});
