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

const Item = (course) => <CourseCard  {...course} />;

const CourseList = ({ courses }) => {
  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.container}
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
    height: 1050,
  },
});

export default CourseList;
