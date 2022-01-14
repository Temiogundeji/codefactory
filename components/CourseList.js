import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Input } from "@ui-kitten/components";
import { getCourses } from "../actions/courses";
import CourseCard from "../components/CourseCard";
import { ActivityIndicator } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const CourseList = () => {
  const [myCourses, setMyCourses] = useState([]);
  const courses = useSelector((state) => state.courses.courses);
  const isLoading = useSelector((state) => state.courses.isLoading);
  const dispatch = useDispatch();

  //Search Key
  const [searchKey, setSearchKey] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    if (courses && courses.length > 0) {
      setMyCourses(courses);
      setFilteredCourses(courses);
    }
  }, [myCourses]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = myCourses.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredCourses(newData);
      setSearchKey(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredCourses(myCourses);
      setSearchKey(text);
    }
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      {/* <Icon {...props} name={"search"} /> */}
      <Feather name="search" size={18} color="#3C3A36" />
    </TouchableWithoutFeedback>
  );

  const CardList = () => {
    return (
      <View style={Styles.listContainer}>
        <View style={Styles.cardForm}>
          <Input
            value={searchKey}
            size={"large"}
            placeholder="Search Course"
            onChangeText={(x) => searchFilterFunction(x)}
            style={Styles.searchForm}
            accessoryRight={renderIcon}
          />
        </View>
        {filteredCourses.map((course) => {
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
  searchForm: {
    backgroundColor: "#ffffff",
    borderColor: "#3C3A36",
    borderRadius: 12,
  },
});


export default CourseList;
