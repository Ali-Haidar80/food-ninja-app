import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Gbutton from "../components/Gbutton";

const Onboard = ({navigates, imgadd , heading, subHeading, btnText}) => {
  return (
    <View style={styles.main}>
      <StatusBar hidden={true} />
      <View style={{ marginTop: 40 }}>
        <Image
          style={{ height: 400, width: "100%" }}
          source={imgadd}
        />
      </View>
      <View>
        <View style={{marginHorizontal:50,paddingHorizontal:25}}>
        <Text style={{color:"#fff",marginTop:15,marginHorizontal:20,fontSize:22,textAlign:"center",fontWeight:'bold'}}>{heading}</Text>
        </View>
        <View style={{marginHorizontal:50,paddingHorizontal:10}}>
          <Text style={{color:"#fff",marginTop:15,marginHorizontal:30,fontSize:12,textAlign:"center",fontWeight:"300"}}>
            {subHeading}
          </Text>
        </View>
        <View style={{display:'flex',justifyContent:"center",alignItems:'center',marginTop:20}}>
            

            <Gbutton navi={navigates} name={btnText}/>
            
        </View>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0D0D0D",
    flex: 1,
  },
});
