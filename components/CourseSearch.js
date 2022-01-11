import React, { useState } from "react";
import { View } from "react-native";
import { Card, Input, Icon } from "@ui-kitten/components";
import { Feather } from "@expo/vector-icons";
import { searchCourse } from "../shared/utils";

const CourseSearch = ({ courses }) => {
  courses = courses || [];
  const [searchVal, setSearchVal] = useState("");
  const [filterCourses, setFilteredCourses] = useState([]);

  const courseSearch = () => {
    let lowerSearchVal = searchVal.toLowerCase();
    let newCourseArray = courses.filter((course) =>
      word.toLowerCase().includes(lowerSearchVal)
    );
    setFilteredCourses(newCourseArray);
  };
  return (
    <View style={Styles.cardForm}>
      <Input
        value={searchVal}
        size={"large"}
        placeholder="Search course"
        onChangeText={() => searchVal()}
        style={Styles.searchForm}
        accessoryRight={renderIcon}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  searchForm: {
    backgroundColor: "#ffffff",
    borderColor: "#3C3A36",
    borderRadius: 12,
  },
});

export default CourseSearch;
