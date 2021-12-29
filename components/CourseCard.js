import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Card } from "@ui-kitten/components";

const image = { uri: "https://reactjs.org/logo-og.png" };

const CourseCard = ({ cardImage, title, description }) => (
  <View style={Styles.container}>
    <View style={Styles.cardContainer}>
      <View style={Styles.cardHeader}>
        <Image source={image} style={Styles.image} />
      </View>
      <View style={Styles.cardBody}>
        <Text style={Styles.cardTitle}>UI</Text>
        <Text style={Styles.cardDescription}>
          Advanced User Interface Design
        </Text>
      </View>
    </View>
  </View>
);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    height: 250,
    width: "90%",
    marginHorizontal: "5%",
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
  image: {
    height: 135,
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default CourseCard;
