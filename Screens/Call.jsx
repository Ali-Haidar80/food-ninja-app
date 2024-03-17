import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Close from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';

const Call = () => {
    const [toggleVolume,setToggleVolume] = useState(false)
    const navigation = useNavigation()
  return (
    <View style={styles.main}>
       <View>
        <Image
          style={styles.pattern}
          source={require("./../Images/Pattern.png")}
        />
      </View>

      <View style={{top:"20%",alignItems:"center",}}>
      <LinearGradient style={{width:200,height:200,borderRadius:100,padding:10,justifyContent:'center',alignItems:"center"}}  start={{x:0,y:0}} end={{x:1,y:0}} useAngle={true} angle={140} angleCenter={{x:0.5,y:0.5}}   colors={['#53E88B','#15BE77']}>
        <Image style={{width:190,height:190,borderRadius:100}} source={require('./../Images/chat/dp.png')} />
      </LinearGradient>
      <Text style={{color:"#fff",fontSize:30,marginTop:30,fontWeight:"bold"}}>Courtney Henry</Text>
      <Text style={{color:"#fff",fontSize:20,marginTop:10,fontWeight:"400"}}>Ringing...</Text>
      <View style={{top:"50%",flexDirection:"row",justifyContent:"space-between",columnGap:20}}>
        <TouchableOpacity onPress={()=>setToggleVolume(!toggleVolume)} style={{backgroundColor:"#112118",height:80,width:80,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
            {
                toggleVolume ? <Image source={require('./../Images/Call/VU.png')}/> : <Image source={require('./../Images/Call/VO.png')}/>
            }
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('OrderRating')} style={{backgroundColor:"#ff4b4b",height:80,width:80,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
            <Close size={25} color={"#fff"} name='close' />
        </TouchableOpacity>
        
      </View>
      </View>
    </View>
  )
}

export default Call

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#0d0d0d",
        flex: 1,
        position: "relative",
      },pattern: {
        position: "absolute",
        top: -10,
        right: 0,
        width: "100%",
      },
})