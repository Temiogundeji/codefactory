import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Card } from "@ui-kitten/components";
import CustomHeader from "../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import ProfileMenuCard from "../components/ProfileMenuCard";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader
        handlePress={() => navigation.navigate("DashboardScreen")}
        name={"Profile"}
      />
      <View style={styles.mainContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/Avatar.png")}
        />
      </View>
      <ScrollView>
        <ProfileMenuCard title="Your Courses" />
        <ProfileMenuCard title="Personal Information" />
        <ProfileMenuCard title="Saved" />
        <ProfileMenuCard title="Payments" />
        <ProfileMenuCard title="Logout" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  textColor: {
    color: "#000000",
    marginTop: 20,
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageStyle: {
    resizeMode: "contain",
    alignSelf: "center",
    width: "35%",
    marginTop:-30 
  },
  profileMenuCards: {
    height: 1000,
  },
  profileMenuCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 80,
    borderRadius: 15,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowRadius: 1.41,
    elevation: 4,
  },
  profileMenuText: {
    fontFamily: "Roboto-medium",
    fontSize: 18,
    color: "#222222",
  },
});

export default ProfileScreen;
