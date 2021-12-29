import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from "react-native";

const Categories = () => {
  const [selectedId, setSelectedId] = useState(null);
  const windowWidth = Dimensions.get("window").width;
  const Data = [
    {
      id: 1,
      category: "Frontend",
    },
    {
      id: 2,
      category: "Backend",
    },
    {
      id: 3,
      category: "Fulllstack",
    },
    {
      id: 4,
      category: "Mobile",
    },
  ];

  const Item = ({ onPress, category }) => {
    return (
      <TouchableOpacity style={Styles.categoryTab} onPress={onPress}>
        <Text style={Styles.tabText}>{category}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <Item category={item.category} handlePress={() => {}} />
  );
  return (
    <View style={[Styles.categoryContainer, { width: windowWidth + 10 }]}>
      <View style={Styles.categoryRow}>
        <View style={Styles.categoryTitle}>
          <Text style={Styles.categoryText}>Category:</Text>
        </View>
        <FlatList
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          data={Data}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: "13%",
    marginTop: 0,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 14,
  },
  categoryRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    color: "#3C3A36",
    fontSize: 14,
    fontFamily: "Roboto-medium",
    marginRight: 10,
  },
  categoryTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryTab: {
    width: 80,
    marginRight: 0,
  },
  tabText: {
    color: "#78746D",
    fontSize: 13,
    alignContent: "center",
    fontFamily: "Roboto-medium",
  },
  categoryActive: {
    backgroundColor: "#EDDFBC",
    padding: 2,
    borderRadius: 50,
  },
});

export default Categories;
