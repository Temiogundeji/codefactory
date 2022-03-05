import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomHeader from "../components/CustomHeader";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader name={"Profile"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  textColor: {
    color: "#000000",
    marginTop: 20,
  },
});

export default ProfileScreen;
