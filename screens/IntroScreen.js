import React from "react";
import { StyleSheet, View } from "react-native";
import { ViewPager } from "@ui-kitten/components";
import IntroOne from "../components/IntroOne";
import IntroTwo from "../components/IntroTwo";
import IntroThree from "../components/IntroThree";

export const IntroScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <IntroOne />
      <IntroTwo />
      <IntroThree />
    </ViewPager>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  tab: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
