import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Card, Input, Icon } from "@ui-kitten/components";
import { Feather } from "@expo/vector-icons";
import { searchCourse } from "../shared/utils";

const renderIcon = (props) => (
  <TouchableWithoutFeedback>
    {/* <Icon {...props} name={"search"} /> */}
    <Feather name="search" size={18} color="#3C3A36" />
  </TouchableWithoutFeedback>
);

const CourseSearch = ({ handleChange = () => {}, value }) => {
  

  return (
    <View style={Styles.cardForm}>
      <Input
        value={searchVal}
        size={"large"}
        placeholder="Search Course"
        onChangeText={handleChange}
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
