import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

const IntroTwo = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigate(navigation, "LoginScreen")}>
          <Text style={Styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.introMain}>
        <Image
          style={{
            resizeMode: "cover",
            height: 264,
            width: 375,
          }}
          source={require("../assets/intro-images/intro-img2.png")}
        />
        <View style={Styles.introOneTextContainer}>
          <View>
            <Text style={Styles.introOneText}>Find a course for you</Text>
          </View>
          <View style={Styles.paraTextContainer}>
            <Text style={Styles.introParaText}>
              Quarantine is the perfect time to spend your day learning
              something new, from anywhere!
            </Text>
          </View>
        </View>
        <View style={Styles.slides}>
          <View style={[Styles.slideRound]}></View>
          <View style={[Styles.slideRound, Styles.isActive]}></View>
          <View style={Styles.slideRound}></View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingVertical: 40,
    paddingHorizontal: 30,
    height: "100%",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  skipText: {
    color: "#78746D",
    fontFamily: "Roboto-bold",
  },
  introMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  introOneTextContainer: {
    marginTop: 20,
    height: 144,
    width: "100%",
    alignItems: "center",
    marginBottom: 18,
  },
  introOneText: {
    color: "#3C3A36",
    fontSize: 18,
    fontFamily: "Roboto-bold",
  },
  introParaText: {
    marginTop: 15,
    fontSize: 15,
    lineHeight: 22,
    color: "#78746D",
    textAlign: "center",
  },
  paraTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#bbbbbb",
  },
  slides: {
    display: "flex",
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-between",
  },
  slideRound: {
    height: 7,
    borderRadius: 50,
    backgroundColor: "#666666",
    width: 7,
  },
  isActive: {
    height: 9,
    width: 9,
  },
});

export default IntroTwo;
