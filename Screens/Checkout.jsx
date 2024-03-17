import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import I from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import Minus from "react-native-vector-icons/Feather";
import Plus from "react-native-vector-icons/Feather";
import Trash from "react-native-vector-icons/Feather";
import Animated, {

  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
const Width = -Dimensions.get("window").width;
const Checkout = () => {
  const navigation = useNavigation()
  const TranslateX = useSharedValue(0);
  // const TranslateY = useSharedValue(0);

  const PanGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = TranslateX.value;
      // context.translateY = TranslateY.value;
    },
    onActive: (event, context) => {
      TranslateX.value = event.translationX + context.translateX;
      // TranslateY.value = event.translationY + context.translateY;
    },
    onEnd: (event) => {
      console.log(TranslateX.value, Width * 0.27);
      if (TranslateX.value < Width * 0.25) {
        console.log("True");
        TranslateX.value = withSpring(Width * 0.25);
      } else {
        TranslateX.value = (0);
      }
      // TranslateX.value = withSpring(0);
      // TranslateY.value = withSpring(0);
    },
  });
  const animatedtransform = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: TranslateX.value },
        // { translateY: TranslateY.value },
      ],
    };
  });
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
          Order Details
        </Text>
      </View>
      <ScrollView>

        {/* <View style={styles.cartContainer}>

          
          <View style={styles.cartImage}>
            <Image
              style={styles.cartImg}
              source={require("./../Images/menuItems/gnoddle.png")}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}>
              Spacy fresh crab
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "rgba(100,100,100,0.5)",
              }}
            >
              Waroenk kita
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#53E88B" }}
            >
              $ 35
            </Text>
          </View>
          <View style={[styles.cartQuantity, styles.cartImage]}>
            <TouchableOpacity
              style={[styles.quantityOprators, { backgroundColor: "#26362e" }]}
            >
              <Minus name="minus" size={12} color={"#52e88b"} />
            </TouchableOpacity>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}>
                1
              </Text>
            </View>
            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                useAngle={true}
                angle={140}
                angleCenter={{ x: 0.5, y: 0.5 }}
                colors={["#53E88B", "#15BE77"]}
                style={styles.quantityOprators}
              >
                <Plus name="plus" size={15} color={"white"} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View> */}
      <GestureHandlerRootView>
      <TouchableOpacity onPress={()=>console.warn("Delete Clicked")} style={styles.trash}>
        <Trash style={{right: (-Width * .2)/2}} name="trash-2" size={20} color={"#fff"} />
      </TouchableOpacity>
      <PanGestureHandler onGestureEvent={PanGestureEvent}>
        <Animated.View style={[styles.cartContainer, animatedtransform]}>
          <View style={styles.cartImage}>
            <Image
              style={styles.cartImg}
              source={require("./../Images/menuItems/gnoddle.png")}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}>
              Spacy fresh crab
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "rgba(100,100,100,0.5)",
              }}
            >
              Waroenk kita
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#53E88B" }}
            >
              $ 35
            </Text>
          </View>
          <View style={[styles.cartQuantity, styles.cartImage]}>
            <TouchableOpacity
              style={[styles.quantityOprators, { backgroundColor: "#26362e" }]}
            >
              <Minus name="minus" size={12} color={"#52e88b"} />
            </TouchableOpacity>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}>
                1
              </Text>
            </View>
            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                useAngle={true}
                angle={140}
                angleCenter={{ x: 0.5, y: 0.5 }}
                colors={["#53E88B", "#15BE77"]}
                style={styles.quantityOprators}
              >
                <Plus name="plus" size={15} color={"white"} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </PanGestureHandler>
     
    </GestureHandlerRootView>
        
      </ScrollView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        useAngle={true}
        angle={140}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={["#53E88B", "#15BE77"]}
        style={styles.checktoutContainer}
      >
        <Image style={{width: Dimensions.get("window").width - 20,borderRadius:16,opacity:0.2,
    height: 200,}} source={require('./../Images/checkoutP.png')} />
    
    <View style={styles.checkoutAmountView}> 
      <View style={styles.AmountView}>
      <Text style={styles.amount}>Sub-Total</Text>
      <Text style={styles.amount}>120 $</Text>
      </View>
      <View style={styles.AmountView}>
      <Text style={styles.amount}>Delivery Charges</Text>
      <Text style={styles.amount}>10 $</Text>
      </View>
      <View style={styles.AmountView}>
      <Text style={styles.amount}>Discount</Text>
      <Text style={styles.amount}>20 $</Text>
      </View>
      <View style={[styles.AmountView,{marginTop:15}]}>
      <Text style={[styles.amount,{fontSize:25,fontWeight:"bold"}]}>Total</Text>
      <Text style={[styles.amount,{fontSize:25,fontWeight:"bold"}]}>150 $</Text>
      </View>
      
    </View>
      <TouchableOpacity style={styles.placeBtn}>
        <Text style={{color:"#15BE77",fontSize:18,fontWeight:"800"}}>Place My Order</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Checkout;

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
    height: 26,
    width: 26,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cartQuantity: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: Dimensions.get("window").width / 5,
  },
  checktoutContainer: {
    width: Dimensions.get("window").width - 20,
    height: 200,
    marginHorizontal:10,
    borderRadius:16,
    marginBottom:10,
  },
  checkoutAmountView:{
    width: Dimensions.get("window").width - 20,
    // flexDirection:"row",
    // justifyContent:"space-between",
    position:"absolute",
    paddingHorizontal:20,
    marginTop:10
  },
  AmountView:{flexDirection:"row",justifyContent:"space-between"}
  ,
  amount:{
    color:'#fff',
    fontSize:18,
    fontWeight:"600"
  },
  placeBtn:{
    backgroundColor:"#fff",
    position: "absolute",
    bottom:10,
    marginHorizontal:10,
    height:55,
    width: Dimensions.get("window").width - 40,
    borderRadius:16,
    alignItems:"center",
    justifyContent:"center"
  },
  trash: {
    backgroundColor: "#FEAD1D",
    position: "absolute",
    right:0,
    marginHorizontal:20,
    marginTop:10,
    height:94,
    width:-Width - 40,
    justifyContent:"center",
    alignItems:"flex-end",
    borderRadius:16
  },
});
