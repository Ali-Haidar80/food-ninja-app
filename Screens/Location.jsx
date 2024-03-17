import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Gbutton from "../components/Gbutton";
import { TouchableHighlight } from "react-native";

const Location = () => {
  const navigation = useNavigation();
  function navigates() {
    navigation.navigate("UpPreview");
  }
  function navigates1() {
    navigation.navigate("RegSuccess");
  }
  return (
    <View style={styles.main}>
      <View style={{ position: "relative" }}>
        <Image
          style={[styles.pattern, { transform: [{ rotate: "0deg" }] }]}
          source={require("./../Images/group.png")}
        />
      </View>
      <TouchableHighlight
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
      </TouchableHighlight>
      <View style={{ marginTop: 65, marginLeft: 20, marginRight: 100 }}>
        <Text
          style={{
            color: "#fff",
            lineHeight: 32,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Set Your Location 
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
      <View style={[styles.searchSection,{}]} onPress={() => {}}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginTop:10}}>
            
        <Image style={styles.input} source={require("./../Images/pinlog.png")} />
        <Text style={{color:"#fff",fontSize:18,fontWeight:"500"}}>Your Location</Text>
        </View>
      <TouchableHighlight style={[styles.searchSection,{backgroundColor: "#393939",paddingVertical:25,marginBottom:12}]} onPress={() => {}}>
          <Text style={{color:"#fff",fontSize:15,textAlign:"center",fontWeight:"500"}}>Set Location</Text>
      </TouchableHighlight>
      </View>
      
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

export default Location;

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
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#262626",
    marginHorizontal: 15,
    marginTop: 20,
    paddingHorizontal: 15,
    
  },
  input:{
    marginRight:10
  }
});
