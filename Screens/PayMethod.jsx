import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Gbutton from "../components/Gbutton";
import { TouchableHighlight } from "react-native";

const PayMethod = () => {
  const navigation = useNavigation();
  function navigates() {
    navigation.goBack();
  }
  function navigates1() {
    navigation.navigate("UpPhoto");
  }
  return (
    <View style={styles.main}>
      <View style={{ position: "relative" }}>
        <Image
          style={[styles.pattern, { transform: [{ rotate: "0deg" }] }]}
          source={require("./../Images/group.png")}
        />
      </View>
      <TouchableOpacity
        style={styles.bg}
        onPress={() => {
          navigates();
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 25,
            marginBottom: 10,
          }}
        >
          <Image
            style={{ marginTop: 10, position: "absolute", top: 0, left: 20 }}
            source={require("./../Images/back.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 65, marginLeft: 20, marginRight: 85 }}>
        <Text
          style={{
            color: "#fff",
            lineHeight: 32,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Payment Method
        </Text>
      </View>
      <View style={{ marginTop: 25, marginLeft: 20, marginRight: 85 }}>
        <Text
          style={{
            color: "#fff",
            lineHeight: 21,
            fontSize: 12,
            fontWeight: "400",
          }}
        >
          This data will be displayed in your account profile for security
        </Text>
      </View>
      <TouchableHighlight style={[styles.searchSection,{paddingVertical:27}]} onPress={() => {}}>
        <Image style={styles.input} source={require("./../Images/pal.png")} />
      </TouchableHighlight>
      <TouchableHighlight style={[styles.searchSection,{paddingVertical:8}]} onPress={() => {}}>
        <Image style={styles.input} source={require("./../Images/visa.png")} />
      </TouchableHighlight>
      <TouchableHighlight style={[styles.searchSection,{paddingVertical:20}]} onPress={() => {}}>
        <Image style={styles.input} source={require("./../Images/oneer.png")} />
      </TouchableHighlight>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <Gbutton navi={navigates1} name="Next" />
      </View>
    </View>
  );
};

export default PayMethod;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  pattern: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  searchSection: {
    display: "flex",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262626",
    marginHorizontal: 15,
    marginTop: 20,
    paddingVertical: 25,
  },
});
