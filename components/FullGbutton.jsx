import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const FullGbutton = ({ navi, name }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navi();
      }}
    >
      <LinearGradient
        style={styles.bg}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        useAngle={true}
        angle={140}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={["#53E88B", "#15BE77"]}
      >
        <Text style={styles.btn_text}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FullGbutton;

const styles = StyleSheet.create({
  bg: {
    // backgroundColor: "#54d2d2",
    height: 60,
    width: Dimensions.get("window").width - 40,
    borderRadius: 15,
    marginTop: 6,
    marginHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //  verticalAlign:'midd'
  },
  btn_text: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
});
