import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "@ui-kitten/components";

const ProfileMenuCard = ({ title }) => {
  return (
    <Card style={styles.profileMenuCard}>
      <Text style={styles.profileMenuText}>{title}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  profileMenuCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 80,
    borderRadius: 15,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowRadius: 1.41,
    elevation: 4,
    marginBottom: 20,
  },
  profileMenuText: {
    fontFamily: "Roboto-medium",
    fontSize: 18,
    color: "#222222",
  },
});

export default ProfileMenuCard;
