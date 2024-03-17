import { Dimensions, StyleSheet, Text, Touchable, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const BottomNavBar = ({ root }) => {
  const navigation = useNavigation();

  // console.log(route.name);
  return (
    <View style={styles.botomBar}>
      {root.name === "Home" ? (
        <View>
          <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Home")}>
            <Image source={require("./../Images/Home.png")} />
          <Text style={styles.tabText}>Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("./../Images/Home.png")} />
        </TouchableOpacity>
      )}
      {root.name === "Profile" ? (
        <View>
          <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Profile")}>
            <Image source={require("./../Images/profile.png")} />
          <Text style={styles.tabText}>Profile</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={require("./../Images/profile.png")} />
        </TouchableOpacity>
      )}
      {root.name === "Checkout" ? (
        <View>
          <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Checkout")}>
            <Image source={require("./../Images/check.png")} />
          <Text style={styles.tabText}>CheckOut</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
          <Image source={require("./../Images/check.png")} />
        </TouchableOpacity>
      )}
      {root.name === "Chat" ? (
        <View>
          <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Chat")}>
            <Image source={require("./../Images/chat.png")} />
          <Text style={styles.tabText}>Chat</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Image source={require("./../Images/chat.png")} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  botomBar: {
    // flex:1,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#151515",
    // paddingVertical:90,
    height: 74,
    marginHorizontal: 10,
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width - 18,
    borderTopWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#27372e",
    // backgroundColor: "rgba(201, 254, 201, 0.2)",
  },
  tabText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
