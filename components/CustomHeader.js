import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const IconSize = 50;

const CustomHeader = ({ name }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          style={styles.iconStyle}
          name="chevron-back-circle-outline"
          size={IconSize}
          color="black"
        />
      </TouchableOpacity>
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
    marginBottom: 30,
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
