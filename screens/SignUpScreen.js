import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";
import { Text, Input, Icon, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "../shared/utils";

const SignupScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };

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
          }}
          source={require("../assets/signup.png")}
        />
        <View style={Styles.introOneTextContainer}>
          <View>
            <Text style={Styles.introOneText}>Signup</Text>
          </View>
          <View style={Styles.paraTextContainer}>
            <Text style={Styles.introParaText}>Create your account</Text>
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
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={Styles.input}
                  placeholder="ade"
                  size={"large"}
                />
              )}
              name="username"
            />
            {errors.username && (
              <Text>
                Username isLoading ? <ActivityIndicator size={20} /> : null
                required.
              </Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
                validate: "",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={Styles.input}
                  placeholder="awesomedude@gmail.com"
                  size={"large"}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text>
                Email isLoading ? <ActivityIndicator size={20} /> : null
                required.
              </Text>
            )}
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
                  placeholder="Password"
                  size={"large"}
                  onBlur={onBlur}
                  accessoryRight={renderIcon}
                  secureTextEntry={secureTextEntry}
                  onChangeText={onChange}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text>
                Password isLoading ? <ActivityIndicator size={20} /> : null
                required.
              </Text>
            )}
          </View>
          <TouchableOpacity>
            <Text style={Styles.forgetText}>Forget password?</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={Styles.button}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={Styles.forgetText}>Sign Up</Text>
              {isLoading ? (
                <ActivityIndicator color={"#cccccc"} size={20} />
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate(navigation, "SignUpScreen")}
            >
              <Text style={Styles.signupLink}>Login</Text>
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
    paddingVertical: 40,
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
    marginTop: -95,
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
    marginTop: 10,
    borderRadius: 16,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDDFBC",
    textAlign: "center",
    borderRadius: 10,
    height: 50,
    borderWidth: 0,
  },
});

export default SignupScreen;
