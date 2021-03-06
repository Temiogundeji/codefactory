import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Card } from "@ui-kitten/components";

const windowWidth = Dimensions.get("window").width - 40;

const CourseCard = (props) => (
  <View style={Styles.container} key={props.id}>
    <TouchableOpacity onPress={() => props.handlePress()}>
      <View style={Styles.cardContainer}>
        <View style={Styles.cardHeader}>
          <Image source={{ uri: props.image }} style={Styles.image} />
        </View>
        <View style={Styles.cardBody}>
          <Text style={Styles.cardTitle}>{props.title}</Text>
          <Text style={Styles.cardDescription}>{props.about}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const Styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    height: 100,
    width: "100%",
    marginBottom: "60%",
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    height: 300,
    width: windowWidth,
    marginHorizontal: "5%",
    marginBottom: 20,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: "7%",
    height: "50%",
    width: "100%",
  },
  cardTitle: {
    fontSize: 20,
    color: "#3C3A36",
    fontFamily: "Roboto-bold",
  },
  cardDescription: {
    color: "#78746D",
    fontSize: 13,
    alignContent: "center",
    fontFamily: "Roboto-medium",
  },
  cardHeader: {
    height: 150,
  },
  image: {
    height: 155,
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000",
  },
});

export default CourseCard;
