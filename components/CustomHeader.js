import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconSize = 50;

const CustomHeader = ({ name, handlePress = () => {} }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={handlePress}
        style={styles.iconStyle}
        name="chevron-back-circle-outline"
        size={IconSize}
        color="black"
      />
      <Text style={styles.screenTitle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 50,
    textAlign: "center",
    fontFamily: "Roboto-bold",
  },
  iconStyle: {
    marginRight: "22%",
  },
  screenTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Roboto-bold",
    color: "#222222",
    fontSize: 20,
  },
});

export default CustomHeader;
