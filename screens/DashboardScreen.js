import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DashboardHeader from "../components/DashboardHeader";
import Categories from "../components/Categories";
import CourseCard from "../components/CourseCard";

const DashboardScreen = () => {
  return (
    <View style={Styles.container}>
      <DashboardHeader />
      <Categories />
      <CourseCard />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
  },
});

export default DashboardScreen;
