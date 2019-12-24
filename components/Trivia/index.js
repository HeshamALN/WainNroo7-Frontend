// import React, { Component } from "react";
// <<<<<<< HEAD
// import { observer } from "mobx-react";
// // NativeBase Components
// import { Alert } from "react-native";
// import {
//   List,
//   Content,
//   Container,
//   Text,
//   Button,
//   ListItem,
//   H1
// } from "native-base";

// //stores
// import levelsStore from "../../stores/levelsStore";
// import data from "../../stores/triviadummy";

// //components

// class LevelsList extends Component {
//   state = {
//     choice: 0,
//     seconds: 10,
//     totalScore: 0
//   };

//   dec = () => {
//     if (this.state.seconds > 0)
//       this.setState({ seconds: this.state.seconds - 1 });
//   };

//   componentDidMount() {
//     this.setState({ choice: 0, seconds: 10 });
//     this.interval = setInterval(this.dec, 1000);
//   }

//   componentDidUpdate() {
//     if (this.state.seconds === 0) {
//       clearInterval(this.interval);
//       Alert.alert(
//         "T I M E",
//         "O  U  T",
//         [
//           {
//             text: " < Back",
//             onPress: () => {
//               this.props.navigation.navigate("Levels");
//               console.log("OK Pressed");
//             }
//           }
//         ],
//         { cancelable: false }
//       );
//     }
//   }

//   handleOnPress = async score => {
//     if (this.state.choice < 3) {
//       await this.setState({ choice: this.state.choice + 1 });
//       this.setState({ totalScore: this.state.totalScore + score });
//     } else this.props.navigation.navigate("Levels");
//   };

//   render() {
//     let choicee = this.state.choice;
//     if (this.state.choice < 3) {
//       return (
//         <Container>
//           <Content>
//             <>
//               <H1>{this.state.seconds}</H1>
//               <Text> {`Score : ${this.state.totalScore}`}</Text>
//               <Text>{data[0].questions[choicee].Question} </Text>
//               <List>
//                 {data[0].questions[0].Answers.map(ans => (
//                   <ListItem>
//                     <Button onPress={() => this.handleOnPress(ans.score)}>
//                       <Text> {`${this.state.choice} ${ans.answer}`}</Text>
//                     </Button>
//                   </ListItem>
//                 ))}
//               </List>
//             </>
//           </Content>
//         </Container>
//       );
//     } else {
//       return (
//         <Container>
//           <Content>
//             <Text> {`Ur Total Score : ${this.state.totalScore}`}</Text>
//             <Button onPress={this.handleOnPress}>
//               <Text> {`${this.state.choice} Exit`}</Text>
//             </Button>
//           </Content>
//         </Container>
//       );
//     }
//   }
// }

// // LevelsList.navigationOptions = {
// //   title: "وين نروح؟؟",
// //   headerRight:
// // };

// export default observer(LevelsList);
// =======
// import { Container, Content, Button, Text } from "native-base";

// //stores
// import data from "../../stores/triviadummy";

// class Trivia extends Component {
//   render() {
//     let game = data.questions.forEach(obj => {
//       <Text>obj.question</Text>;
//     });
//     const handlePress = () => this.props.navigation.navigate("Levels");
//     return (
//       <Container>
//         <Content>{game}</Content>
//       </Container>
//     );
//   }
// }

// export default Trivia;
// >>>>>>> 2be7800e3b2c1c0c2a7513af19e829ef82058c2b
