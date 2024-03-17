import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import I from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';

const NotifyScreen = () => {
   const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <View style={{ position: "relative" }}>
        <Image
          style={[
            styles.pattern,
            { transform: [{ rotate: "0deg" }], opacity: 0.3 },
          ]}
          source={require("./../Images/group.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          position: "absolute",
          left: 30,
          top: 40,
          backgroundColor: "rgba(250,250,250,0.06)",
          borderRadius: 15,
          padding: 10,
        }}
        >
        <I name="chevron-left" size={30} color="#DA6317" />
      </TouchableOpacity>
      <View style={{ marginTop: 105, marginLeft: 30 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 35,
            fontWeight: "bold",
          }}
          >
          Notifications
        </Text>
      </View>
     <View style={{marginTop:30}}>
     <View style={{marginTop:10,alignItems:"center",paddingHorizontal:20,paddingVertical:15,flexDirection:"row",backgroundColor:"rgba(100, 100, 100, 0.3)",width:Dimensions.get("window").width-40,marginHorizontal:20,borderRadius:16}}>
      <LinearGradient
          style={{
            top: "-8%",
            right: 0,
            width: 2,
            height: 2,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
       />
        <LinearGradient
          style={{
            bottom: "-8%",
            right: 0,
            width: 8,
            height: 8,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
       />
       
        <View>
          <Image style={{width:40,height:40}} source={require('./../Images/success.png')} />
        </View>
        <LinearGradient
          style={{
            top: "-8%",
            left: -5,
            width: 5,
            height: 5,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
       />
        <LinearGradient
          style={{
            bottom: "-8%",
            left: -5,
            width: 2,
            height: 2,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
       />
       
        
      <View style={[styles.FilterBtnBg]}>
            <Text style={styles.FilterBtnText}>
            Your order has been taken by the driver
            </Text>
            <Text style={{color: "rgba(255,255,255,0.3)"}}>
              10:26 AM
            </Text>
          </View>
      </View>
      <View style={{marginTop:10,alignItems:"center",paddingHorizontal:20,paddingVertical:15,flexDirection:"row",backgroundColor:"rgba(100, 100, 100, 0.3)",width:Dimensions.get("window").width-40,marginHorizontal:20,borderRadius:16}}>
      <LinearGradient
          style={{
            top: "-8%",
            right: 0,
            width: 2,
            height: 2,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#E21B1B", "#C40606"]}
       />
        <LinearGradient
          style={{
            bottom: "-8%",
            right: 0,
            width: 8,
            height: 8,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#E21B1B", "#C40606"]}
       />
       
        <View>
          <Image style={{width:40,height:40}} source={require('./../Images/danger.png')} />
        </View>
        <LinearGradient
          style={{
            top: "-8%",
            left: -5,
            width: 5,
            height: 5,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#E21B1B", "#C40606"]}
       />
        <LinearGradient
          style={{
            bottom: "-8%",
            left: -5,
            width: 2,
            height: 2,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#E21B1B", "#C40606"]}
       />
       
        
      <View style={[styles.FilterBtnBg]}>
            <Text style={styles.FilterBtnText}>
            Your order has been canceled
            </Text>
            <Text style={{color: "rgba(255,255,255,0.3)"}}>
              22 July 2022
            </Text>
          </View>
      </View>
     </View>
    </View>
  )
}

export default NotifyScreen

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#0d0d0d",
        flex: 1,
        position: "relative",
      },
      pattern: {
        position: "absolute",
        top: 0,
        right: 0,
      },FilterBtnBg: {
        marginHorizontal:10
      },
      FilterBtnText: {
        color: "#fff",
        fontSize:20,
        fontWeight:"800"
      },
})