import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomNavBar from "../components/BottomNavBar";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

let MAX_HEIGHT = Dimensions.get("window").height;
let MAX_WIDTH = Dimensions.get("window").width;
const Profile = () => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.ProfileImage}
        source={require("./../Images/chat/dp.png")}
      />

      <View style={styles.DragableContainer}>
        <View style={styles.Container}>
          <View style={styles.scrollbtn}></View>
        </View>
        <View style={styles.Member}>
          <Text style={{ color: "#FEAD1D", fontSize: 12 }}>Member Gold</Text>
        </View>
        <View style={styles.DataContainer}>
          <View style={styles.userName}>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
              Anam Wusono
            </Text>
            <Image source={require("./../Images/editPen.png")} />
          </View>
          <Text
            style={{
              color: "rgba(100,100,100,0.7)",
              fontSize: 16,
              marginLeft: 20,
              marginTop: 5,
            }}
          >
            anamwp66@gmail.com
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            Favorite
          </Text>
          <View style={styles.cartContainer}>
            <View style={styles.cartImage}>
              <Image
                style={styles.cartImg}
                source={require("./../Images/menuItems/gnoddle.png")}
              />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}>
                Spacy fresh crab
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  color: "rgba(100,100,100,0.5)",
                }}
              >
                Waroenk kita
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#53E88B" }}
              >
                $ 35
              </Text>
            </View>
            <View style={[styles.cartQuantity, styles.cartImage]}>
              <TouchableOpacity>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  useAngle={true}
                  angle={140}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  colors={["#53E88B", "#15BE77"]}
                  style={styles.quantityOprators}
                >
                  <Text
                    style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}
                  >
                    Buy Now
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cartContainer}>
            <View style={styles.cartImage}>
              <Image
                style={styles.cartImg}
                source={require("./../Images/menuItems/gnoddle.png")}
              />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}>
                Spacy fresh crab
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  color: "rgba(100,100,100,0.5)",
                }}
              >
                Waroenk kita
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#53E88B" }}
              >
                $ 35
              </Text>
            </View>
            <View style={[styles.cartQuantity, styles.cartImage]}>
              <TouchableOpacity>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  useAngle={true}
                  angle={140}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  colors={["#53E88B", "#15BE77"]}
                  style={styles.quantityOprators}
                >
                  <Text
                    style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}
                  >
                    Buy Now
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* BotomBar */}
      <BottomNavBar root={{ name: "Profile" }} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0d0d0d",
    flex: 1,
    position: "relative",
  },
  ProfileImage: {
    width: MAX_WIDTH,
    height: MAX_HEIGHT / 2.4,
    backgroundColor: "red",
    position: "relative",
  },
  DragableContainer: {
    backgroundColor: "#101010",
    height: MAX_HEIGHT,
    width: MAX_WIDTH,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    top: MAX_HEIGHT / 2.7,
    // justifyContent:"center",
    // alignItems:"center",
  },
  Container: {
    alignItems: "center",
  },
  scrollbtn: {
    width: 65,
    height: 5,
    backgroundColor: "#777777",
    marginTop: 15,
    borderRadius: 10,
  },
  Member: {
    backgroundColor: "#251d0f",
    marginHorizontal: 15,
    position: "absolute",
    top: "4%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 100,
  },
  DataContainer: {
    top: "8%",
    position: "relative",
  },
  userName: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  cartContainer: {
    // backgroundColor:"red",
    marginTop: 10,
    backgroundColor: "#252525",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    paddingVertical: 15,
    // paddingHorizontal:20,
    width: Dimensions.get("window").width - 20,
    borderRadius: 16,
  },
  cartImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  cartImg: {
    height: 64,
    width: 64,
    borderRadius: 16,
  },
  quantityOprators: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  cartQuantity: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: Dimensions.get("window").width / 5,
  },
});
