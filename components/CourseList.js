import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import CourseCard from "./CourseCard";

const Item = (course) => <CourseCard {...course} />;

const CourseList = ({ courses }) => {
  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default CourseList;
