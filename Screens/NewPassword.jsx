import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Gbutton from "../components/Gbutton";
import { TouchableHighlight } from "react-native";
import Icn from "react-native-vector-icons/Fontisto";
import I from "react-native-vector-icons/Ionicons";

const NewPassword = () => {
  const [show,setShow] = useState(false)
  const [nshow,setnShow] = useState(false)
  const navigation = useNavigation();
  function navigates() {
    navigation.goBack();
  }
  function navigates1() {
    navigation.navigate("PassRestSuccess");
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
            Reset your password here
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
            Select which contact details should we use to reset your password
          </Text>
            </View>
     
      
      <View style={[styles.searchSection,{marginTop:45}]}>
       
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor={"#555"}
          secureTextEntry={show}
          underlineColorAndroid="transparent"
        />
        {
            show ?
            <I style={styles.searchIcon} onPress={()=>{setShow(false)}} name="eye-off" size={20} color="#53E88B" />
            :
            <I style={styles.searchIcon} onPress={()=>{setShow(true)}} name="eye" size={20} color="#53E88B" />
        }
            
      </View>
      <View style={styles.searchSection}>
       
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={"#555"}
          secureTextEntry={nshow}
          underlineColorAndroid="transparent"
        />
        {
            nshow ?
            <I style={styles.searchIcon} onPress={()=>{setnShow(false)}} name="eye-off" size={20} color="#53E88B" />
            :
            <I style={styles.searchIcon} onPress={()=>{setnShow(true)}} name="eye" size={20} color="#53E88B" />
        }
            
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

export default NewPassword;

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
