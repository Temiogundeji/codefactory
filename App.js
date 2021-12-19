import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Navigator from "./navigations/routes";
import { setCustomText } from "react-native-global-props";

const customFonts = {
  "fira-regular": require("./fonts/FiraSans-Regular.ttf"),
  "fira-bold": require("./fonts/FiraSans-Bold.ttf"),
  "openSans-light": require("./fonts/OpenSans-Light.ttf"),
  "Roboto-medium": require("./fonts/Roboto-Medium.ttf"),
  "Roboto-bold": require("./fonts/Roboto-Bold.ttf"),
  ...Ionicons.font,
};

const customTextProps = {
  style: {
    fontFamily: "openSans-light",
    color: "#fff",
  },
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  });

  if (fontsLoaded) {
    setCustomText(customTextProps);
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigator />
        </ApplicationProvider>
      </>
    );
  } else {
    return (
      <AppLoading
        startAsync={_loadFontsAsync}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
