import React, { Component } from "react";
import { observer } from "mobx-react";
import {
  StyleSheet,
  Container,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
  Text
} from "react-native";
import { Block, theme } from "galio-framework";
import Logout from "../Logout/index";
import { Spinner } from "native-base";

//stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

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
    if (profileStore.loading) return <Spinner />;
    {
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
                    source={
                      profileStore.profile.gender == "Male"
                        ? require("../../assets/avatars/avatar.png")
                        : require("../../assets/avatars/avatar2.png")
                    }
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
                    ></Text>
                    <Text size={12}></Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      color="#525F7F"
                      size={12}
                      style={{ marginBottom: 4 }}
                    ></Text>
                    <Text size={40}>{profileStore.profile.user.username}</Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      color="#525F7F"
                      size={12}
                      style={{ marginBottom: 4 }}
                    ></Text>
                    <Text size={12}></Text>
                  </Block>
                </Block>
              </Block>
              <Block flex>
                <Block middle style={{ marginTop: 10, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block middle>
                  <Block middle style={{ marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle style={styles.infoInfo}>
                    <Text bold size={15} color="#32325D">
                      First Name: {profileStore.profile.user.first_name}
                    </Text>
                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                      <Block style={styles.divider} />
                    </Block>
                    <Text bold size={15} color="#32325D">
                      Last Name: {profileStore.profile.user.last_name}
                    </Text>
                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                      <Block style={styles.divider} />
                    </Block>
                    <Text bold size={15} color="#32325D">
                      email: {profileStore.profile.user.email}
                    </Text>
                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                      <Block style={styles.divider} />
                    </Block>
                    <Text bold size={15} color="#32325D">
                      Date of birth: {profileStore.profile.birthday}
                    </Text>
                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                      <Block style={styles.divider} />
                    </Block>
                    <Text bold size={15} color="#32325D">
                      Score: {profileStore.profile.total_score}
                    </Text>
                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                      <Block style={styles.divider} />
                    </Block>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Logout style={styles.logout} />
                </Block>
              </Block>
            </ScrollView>
          </Block>
        </Block>
      );
    }
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
    height: height / 2,
    backgroundColor: "#001e54"
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
    justifyContent: "flex-end",
    // marginRight: 300,
    textAlign: "left",
    flex: 1,
    marginTop: 30
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
