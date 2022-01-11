import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import { getCourses } from "../actions/courses";
import CourseCard from "../components/CourseCard";
import { ActivityIndicator } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;

const CourseList = () => {
  const [myCourses, setMyCourses] = useState([]);
  const courses = useSelector((state) => state.courses.courses);
  const isLoading = useSelector((state) => state.courses.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    if (courses && courses.length > 0) {
      setMyCourses(courses);
    }
  }, [myCourses]);

  const CardList = () => {
    return (
      <View style={Styles.listContainer}>
        {myCourses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              cardImage={course.image}
              title={course.title}
              description={course.about}
            />
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={Styles.container}>
        {isLoading ? <ActivityIndicator size={34} color="#78746D" /> : null}
        <CardList />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: windowWidth,
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 240,
    marginTop: 10,
  },
});


export default CourseList;
