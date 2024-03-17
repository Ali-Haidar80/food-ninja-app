import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import {LinearGradient} from 'expo-linear-gradient';

const Gbutton = ({navi,name}) => {
  return (
    <TouchableHighlight style={styles.bg}  onPress={()=>{navi()}}>

   <LinearGradient style={styles.bg} start={{x:0,y:0}} end={{x:1,y:0}} useAngle={true} angle={140} angleCenter={{x:0.5,y:0.5}}   colors={['#53E88B','#15BE77']}>

      <Text  style={styles.btn_text}>{name}</Text>


   </LinearGradient>
    </TouchableHighlight>
  );
};

export default Gbutton;

const styles = StyleSheet.create({
  bg: {
    // backgroundColor: "#54d2d2",
    height:57,
    width:157,
    borderRadius: 15,
   marginTop:6,
   display:"flex",
   alignItems:'center',
   justifyContent:"center"
  //  verticalAlign:'midd'
  },
  btn_text: { color: "white", fontWeight: "500", fontSize: 16 , textAlign:'center'},
});
