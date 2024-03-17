import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Heart from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  event,
  log,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

let MAX_HEIGHT = Dimensions.get("window").height;
let MAX_WIDTH = Dimensions.get("window").width;
const DetailResturant = () => {
  const navigation = useNavigation();
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const g_esture = Gesture.Pan();
  const gesture = g_esture
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      // translateY.value = Math.max(translateY.value,-MAX_HEIGHT)
    })
    .onEnd((event) => {
      if(translateY.value > -MAX_HEIGHT/1.6){
        translateY.value=withSpring(-MAX_HEIGHT/1.6,{damping:20})
      }else if(translateY.value < -MAX_HEIGHT / 1.6){
        translateY.value=withSpring(-MAX_HEIGHT + 80,{damping:15})

      }else{

        translateY.value = withTiming(Math.max(translateY.value,-MAX_HEIGHT + 80))
      }
      // translateY.value=withTiming(0,{duration:1000})
    });
  const rstyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  useEffect(()=>{
    translateY.value=withSpring(-MAX_HEIGHT/1.6,{damping:50})
  },[])
  return (
    <View style={{flex:1,backgroundColor:"0d0d0d"}}>
      <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={{width:"100%",height:MAX_HEIGHT/2}}>
      <Image source={require('./../Images/resturants/resto.png')} />
      </View>
      <GestureDetector gesture={gesture}>
        {/* <Animated.View
          style={[
            {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#111",
            },
            rstyle,
          ]}
        >
          <View
            style={{
              width: "100%",
              height: MAX_HEIGHT,
              backgroundColor: "white",
              position: "absolute",
              top: MAX_HEIGHT / 2.7,
              borderRadius: 25,
            }}
          >
            <View
              style={{
                width: 75,
                height: 4,
                backgroundColor: "grey",
                alignSelf: "center",
                marginVertical: 15,
                borderRadius: 2,
              }}
            ></View>
          </View>
        </Animated.View> */}
       
        <Animated.View style={[styles.DragableContainer,rstyle]}>
          <View style={styles.Container}>
            <View style={styles.scrollbtn}></View>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              position: "relative",
              top: "4%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.Member}>
              <Text
                style={{ color: "#53E88B", fontWeight: "600", fontSize: 12 }}
              >
                Popular
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                columnGap: 10,
                marginHorizontal: 10,
              }}
            >
              <TouchableOpacity onPress={() => console.log("click")}>
                <Image source={require("./../Images/location.png")} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("click")}
                style={{
                  width: 34,
                  height: 34,
                  backgroundColor: "#261211",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Heart name="heart" size={20} color={"#FF1D1D"} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.DataContainer}>
            <View style={styles.userName}>
              <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
                Wijie Bar and Resto
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15,
                marginTop: 10,
                columnGap: 20,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("./../Images/mapPin.png")} />
                <Text
                  style={{
                    color: "rgba(100,100,100,0.7)",
                    fontSize: 18,
                    marginLeft: 5,
                    marginTop: 5,
                  }}
                >
                  19 KM
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("./../Images/RatingStar.png")} />
                <Text
                  style={{
                    color: "rgba(100,100,100,0.7)",
                    fontSize: 18,
                    marginLeft: 10,
                    marginTop: 5,
                  }}
                >
                  4.8 Rating
                </Text>
              </View>
            </View>

            <Text
              style={{
                color: "rgba(200,200,200,0.8)",
                fontSize: 16,
                fontWeight: "600",
                marginHorizontal: 20,
                marginTop: 20,
                lineHeight: 20,
              }}
            >
              Most whole Alaskan Red King Crabs get broken down into legs,
              claws, and lump meat. We offer all of these options as well in our
              online shop, but there is nothing like getting the whole . . . .
            </Text>
             <View style={[styles.userName, { marginVertical: 10 }]}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
                Popular Menu
              </Text>
              <Text
                style={{ color: "#FF7C32", fontSize: 16, fontWeight: "400" }}
              >
                View All
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={()=>navigation.navigate('DetailFood')}
                style={{
                  backgroundColor: "#252525",
                  width: 140,
                  height: 180,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 20,
                  borderRadius: 15,
                }}
              >
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("./../Images/menuItems/piz.png")}
                />
                <Text
                  style={{
                    marginTop: 10,
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  Spacy fresh crab
                </Text>
                <Text style={{ marginTop: 3, color: "rgba(255,255,255,0.5)" }}>
                  12 $
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#252525",
                  width: 140,
                  height: 180,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 20,
                  borderRadius: 15,
                }}
              >
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("./../Images/menuItems/bone.png")}
                />
                <Text
                  style={{
                    marginTop: 10,
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  Healthy Food
                </Text>
                <Text style={{ marginTop: 3, color: "rgba(255,255,255,0.5)" }}>
                  8 $
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#252525",
                  width: 140,
                  height: 180,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 20,
                  borderRadius: 15,
                }}
              >
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("./../Images/menuItems/piz.png")}
                />
                <Text
                  style={{
                    marginTop: 10,
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  Vegan Resto
                </Text>
                <Text style={{ marginTop: 3, color: "rgba(255,255,255,0.5)" }}>
                  12 $
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "800",
                marginLeft: 15,
                marginVertical: 15,
              }}
            >
              Testmonials
            </Text>
            <View
              style={{
                backgroundColor: "#252525",
                width: MAX_WIDTH - 40,
                flexDirection:"row",
                marginHorizontal:20,
                padding:10,
                columnGap : 20,
                borderRadius:16
              }}
            >
              
                <View>
                  <Image style={{height:64,width:64,borderRadius:16}} source={require('./../Images/chat/dp.png')} />
                </View>
          <View style={{}}>
            <Text style={{color:"white",fontSize:16,fontWeight:"800"}}>Dianne Russell</Text>
             <View style={{alignItems:"flex-end",marginRight:"25%",paddingBottom:10}}>
             <View
                style={{
                  backgroundColor: "#27362e",
                  width: 60,
                  borderRadius: 100,
                  height: 40,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: 8,
                }}
              >
                <Image source={require("./../Images/stars/Star.png")} />
                <Text
                  style={{ color: "#53E88B", fontSize: 20, fontWeight: "800" }}
                  >
                  5
                </Text>
              </View>
             </View>
                  <View style={{justifyContent:"center",alignItems:"center",marginRight:50,}}>
                  <Text style={{marginRight:30,fontSize:14,color: "#fff",opacity:0.3}}>This Is great, So delicious! You Must Here, With Your family . . </Text>
                  </View>
          </View>
              
                
            </View>
          </View>
        </Animated.View>

      </GestureDetector>
    </GestureHandlerRootView>
    </View>
  );
};

export default DetailResturant;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0d0d0d",
    height:MAX_HEIGHT/2,
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
    borderRadius: 25,
    position: "absolute",
    top: MAX_HEIGHT,
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
    backgroundColor: "#27372e",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 100,
  },
  DataContainer: {
    top: "5%",
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
