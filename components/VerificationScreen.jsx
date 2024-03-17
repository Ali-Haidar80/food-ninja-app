import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Gbutton from "./Gbutton";
import { TouchableHighlight } from "react-native";

const VerificationScreen = ({navigates1}) => {
  const navigation = useNavigation();
  const [pin1,setPin1]=useState("")
  const [pin2,setPin2]=useState("")
  const [pin3,setPin3]=useState("")
  const [pin4,setPin4]=useState("")

  const pin2ref = useRef(null)
  const pin3ref = useRef(null)
  const pin4ref = useRef(null)

  function navigates() {
    navigation.goBack();
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
            Enter 4-digit
Verification code
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
            Code send to +6282045**** . This code will expired in 01:30
          </Text>
            </View>
     
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"
          onChange={(pin1)=>{setPin1(pin1);
          if (pin1 !=="") {
            pin2ref.current.focus();
          }
          }}
          
          />
         <TextInput
         ref={pin2ref}
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"
          onChange={(pin2)=>{setPin2(pin2);
           if (pin2 !=="") {
              pin3ref.current.focus();
            }
          }}
          />
         <TextInput
         ref={pin3ref}
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"
          onChange={(pin3)=>{setPin3(pin3);
            if (pin3 !=="") {
              pin4ref.current.focus();
            }
          }}
          />
         <TextInput
         ref={pin4ref}
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"
          onChange={(pin4)=>setPin4(pin4)}
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

export default VerificationScreen;

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
    justifyContent:"space-between",
    backgroundColor: "#262626",
    marginHorizontal: 15,
    marginTop:40,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // padding: 20,
  },
input: {
    // backgroundColor:"#fff",
    paddingHorizontal:20,
    marginVertical:20,
    marginHorizontal:10,
    color: "#f4f4f4",
    fontSize:45,
    fontWeight:"800",
    textAlign:"center"
  },
});
