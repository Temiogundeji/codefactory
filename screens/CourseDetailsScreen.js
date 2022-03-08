import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../components/CustomHeader";

const CourseDetailsScreen = ({ route }) => {
  const {
    data: { id, title, about, duration },
  } = route.params;
  return (
    <View key={id} style={styles.container}>
      <CustomHeader name={"Course"} />
      <View>
        <Text style={styles.courseTitle}>{title}</Text>
        <Text style={styles.courseDetails}>{about}</Text>
        <View style={styles.durationRow}>
          <Text style={styles.durationLabel}>Duration: </Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  courseTitle: {
    fontSize: 28,
    color: "#222222",
    fontFamily: "Roboto-bold",
  },
  courseDetails: {
    color: "#222222",
    fontSize: 16,
    marginTop: 10,
  },
  durationRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  duration: {
    color: "#222222",
    fontFamily: "Roboto-bold",
    fontStyle: "italic",
    fontSize: 14,
  },
  durationLabel: {
    color: "#222222",
    fontSize: 14,
    fontFamily: "Roboto-medium",
  },
});

export default CourseDetailsScreen;
