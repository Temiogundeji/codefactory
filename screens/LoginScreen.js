import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";
import { Text, Input, Icon, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "../shared/utils";

const LoginScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  const navigation = useNavigation();

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <View style={Styles.container}>
      <View style={Styles.introMain}>
        <Image
          style={{
            resizeMode: "cover",
            height: "35%",
            width: "80%",
            // height: 253,
            // width: 343,
          }}
          source={require("../assets/login.png")}
        />
        <View style={Styles.introOneTextContainer}>
          <View>
            <Text style={Styles.introOneText}>Login</Text>
          </View>
          <View style={Styles.paraTextContainer}>
            <Text style={Styles.introParaText}>Welcome back on track</Text>
          </View>
        </View>
        <KeyboardAwareScrollView style={Styles.loginForm}>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  style={Styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="awesomedude@gmail.com"
                  value={value}
                  size={"large"}
                />
              )}
              name="email"
            />
            {errors.email && <Text>Email is required.</Text>}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  placeholder="*******"
                  size={"large"}
                  onBlur={onBlur}
                  accessoryRight={renderIcon}
                  secureTextEntry={secureTextEntry}
                  onChangeText={onChange}
                />
              )}
              name="password"
            />
            {errors.password && <Text>Password is required.</Text>}

            <TouchableOpacity>
              <Text style={Styles.forgetText}>Forget password?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={Styles.button}
            >
              <Text style={Styles.forgetText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate(navigation, "SignUpScreen")}
            >
              <Text style={Styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingVertical: 55,
    paddingHorizontal: 30,
    height: "100%",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  skipText: {
    color: "#78746D",
    fontFamily: "Roboto-bold",
  },
  introMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  introOneTextContainer: {
    marginTop: 20,
    height: 144,
    width: "100%",
    alignItems: "center",
    // marginBottom: 3,
  },
  introOneText: {
    color: "#3C3A36",
    fontSize: 18,
    fontFamily: "Roboto-bold",
  },
  introParaText: {
    marginTop: 15,
    fontSize: 15,
    lineHeight: 22,
    color: "#78746D",
    textAlign: "center",
  },
  paraTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#bbbbbb",
  },
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
  },
  loginForm: {
    width: "100%",
    marginTop: -35,
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  forgetText: {
    fontFamily: "Roboto-medium",
    color: "#78746D",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 16,
  },
  signupLink: {
    fontFamily: "Roboto-medium",
    fontStyle: "italic",
    color: "#78746D",
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
    borderRadius: 16,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDDFBC",
    textAlign: "center",
    borderRadius: 10,
    height: 50,
    borderWidth: 0,
  },
});

export default LoginScreen;
