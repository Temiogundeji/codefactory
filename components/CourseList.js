import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, ScrollView } from "react-native";
import { getCourses } from "../actions/courses";
import CourseCard from "../components/CourseCard";

const CourseList = () => {
  const [myCourses, setMyCourses] = useState([]);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (courses) {
      //   console.log(courses);
      dispatch(getCourses());
    }
  }, []);

  useEffect(() => {
    if (myCourses && myCourses.length > 0) {
      setMyCourses(myAttendances);
    }
  }, [myCourses]);

  return (
    <View style={Styles.container}>
      <ScrollView>
        {myCourses.map((course) => {
          <CourseCard
            title={course.title}
            cardImage={course.image}
            description={course.about}
          />;
        })}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default CourseList;
