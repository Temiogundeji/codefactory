import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { Card, Input, Icon } from "@ui-kitten/components";
import { Feather } from "@expo/vector-icons";
import { searchCourse } from "../shared/utils";

const renderIcon = (props) => (
  <TouchableWithoutFeedback>
    {/* <Icon {...props} name={"search"} /> */}
    <Feather name="search" size={18} color="#3C3A36" />
  </TouchableWithoutFeedback>
);

const CourseSearch = ({ handleSearch, searchQuery }) => {
  return (
    <SafeAreaView style={Styles.cardForm}>
      <Input
        value={searchQuery !== null && searchQuery ? searchQuery : null}
        size={"large"}
        placeholder="Search Course"
        onChange={handleSearch}
        defaultValue={searchQuery}
        style={Styles.searchForm}
        accessoryRight={renderIcon}
      />
    </SafeAreaView>
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
