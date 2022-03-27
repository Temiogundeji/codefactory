import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import CustomHeader from "../components/CustomHeader";
import YoutubePlayer from "react-native-youtube-iframe";

const CourseDetailsScreen = ({ route }) => {
  const {
    data: { id, title, about, duration, videos },
  } = route.params;

  const [playing, setPlaying] = useState(false);
  console.log(videos);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <View key={id} style={styles.container}>
      <CustomHeader name={"Course"} />
      <View>
        <Text style={styles.courseTitle}>{title}</Text>
        <Text style={styles.courseDetails}>{about}</Text>
        <View style={styles.durationRow}>
          <Text style={styles.durationLabel}>Duration: </Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
        <View>
          <YoutubePlayer
            height={180}
            play={playing}
            videoId={"OEOb48jG4Cc"}
            onChangeState={onStateChange}
            onError={(error) => {
              Alert.alert("A problem occured", error);
            }}
          />
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  courseTitle: {
    fontSize: 28,
    color: "#222222",
    fontFamily: "Roboto-bold",
  },
  courseDetails: {
    color: "#222222",
    fontSize: 16,
    marginTop: 10,
  },
  durationRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  duration: {
    color: "#222222",
    fontFamily: "Roboto-bold",
    fontStyle: "italic",
    fontSize: 14,
  },
  durationLabel: {
    color: "#222222",
    fontSize: 14,
    fontFamily: "Roboto-medium",
  },
});

export default CourseDetailsScreen;
