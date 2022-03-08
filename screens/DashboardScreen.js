import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DashboardHeader from "../components/DashboardHeader";
import Categories from "../components/Categories";
import CourseCard from "../components/CourseCard";
import CourseList from "../components/CourseList";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../actions/courses";
import { ActivityIndicator } from "react-native-paper";

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const isLoading = useSelector((state) => state.courses.isLoading);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    dispatch(getCourses());
  }, []);
  console.log(courses);
  useEffect(() => {
    if (courses) {
      setMyCourses(courses);
    }
  }, [courses]);

  return (
    <View style={Styles.container}>
      <DashboardHeader />
      <Categories />
      <View>{isLoading ? <ActivityIndicator color="#222222" /> : null}</View>
      <CourseList courses={myCourses} />
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
