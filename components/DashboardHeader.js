import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Card, Input, Icon } from "@ui-kitten/components";
import { Feather } from "@expo/vector-icons";
// 
import CourseSearch from "./CourseSearch";

const DashboardHeader = () => {
  const [isFocus, setIsFocus] = useState(true);
  const [searchVal, setSearchVal] = useState("");

  const styleFocus = () => {};
  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      {/* <Icon {...props} name={"search"} /> */}
      <Feather name="search" size={18} color="#3C3A36" />
    </TouchableWithoutFeedback>
  );

  return (
    <Card>
      <View style={Styles.container}>
        <View style={Styles.cardRow}>
          <View style={Styles.cardRight}>
            <Text style={Styles.helloText}>Hello,</Text>
            <Text style={Styles.greetingText}>Juana Antonieta</Text>
          </View>
          <View style={Styles.cardLeft}>
            <View style={Styles.notification}>
              <Feather name="bell" size={24} color="#3C3A36" />
            </View>
          </View>
        </View>
        <CourseSearch />
      </View>
    </Card>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 10,
  },
  cardRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  helloText: {
    color: "#3C3A36",
    fontSize: 16,
    fontFamily: "Roboto-light",
  },
  greetingText: {
    fontSize: 20,
    color: "#3C3A36",
    fontFamily: "Roboto-bold",
  },
  cardRight: {},
  cardLeft: {},
  notification: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 50,
  },
  cardForm: {},
  searchForm: {
    backgroundColor: "#ffffff",
    borderColor: "#3C3A36",
    borderRadius: 12,
  },
});

export default DashboardHeader;
