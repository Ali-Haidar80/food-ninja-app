import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Gbutton from "../components/Gbutton";
import { TouchableHighlight } from "react-native";

const RegProcess = () => {
  const navigation = useNavigation();
  function navigates() {
    navigation.goBack();
  }
  function navigates1() {
    navigation.navigate("RegVerification");
  }
  return (
    <View style={styles.main}>
      <View style={{position:"relative"}}>
        <Image
          style={[styles.pattern,{transform:[{rotate:"0deg"}]}]}
          source={require("./../Images/group.png")}
        />
      </View>
      <TouchableHighlight style={styles.bg}  onPress={()=>{navigates()}}>
      <View style={{ display: "flex", alignItems: "center", marginTop: 25,marginBottom: 10 }}>
        <Image
        
          style={{ marginTop: 10, position:"absolute", top:0,left:20 }}
          source={require("./../Images/back.png")}
        />
      </View>
        </TouchableHighlight>
        <View style={{ marginTop: 65, marginLeft:20,marginRight:85
             }}>

       <Text
            style={{
              color: "#fff",
             lineHeight:32,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Fill in your bio to get started
          </Text>
            </View>
        <View style={{ marginTop: 25, marginLeft:20,marginRight:85
             }}>

       <Text
            style={{
              color: "#fff",
             lineHeight:21,
              fontSize: 12,
              fontWeight: "400",
            }}
          >
            This data will be displayed in your account profile for security
          </Text>
            </View>
     
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"
        />
      </View>
      
      <View style={{
            flex:1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 25,
          }}>
        <Gbutton navi={navigates1} name="Next"/>
      </View>

    
    </View>
  );
};

export default RegProcess;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  pattern: {
    position: "absolute",
    top:0,
    right:0,
    
  },
 
  searchSection: {
    display: "flex",
    borderRadius: 16,
    // borderWidth: 1,
    // borderColor: "#555",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    marginHorizontal: 15,
    marginTop:20,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 20,
  },
input: {
    flex: 1,
    paddingVertical:20,
    paddingRight: 10,
    paddingLeft: 0,
    color: "#f4f4f4",
    fontSize:17,
  },
});
