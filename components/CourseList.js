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
import { useNavigation } from "@react-navigation/native";

const CourseList = ({ courses }) => {
  const navigation = useNavigation();
  const Item = (course) => (
    <CourseCard
      handlePress={() => {
        navigation.navigate("CourseDetailsScreen", {
          data: course,
        });
      }}
      {...course}
    />
  );
  const renderItem = ({ item, index }) => <Item {...item} />;

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
    marginBottom: 100,
    marginTop: 0,
    height: 1050,
  },
});

export default CourseList;
