import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
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
import { LinearGradient } from "expo-linear-gradient";

import Minus from "react-native-vector-icons/Feather";
import Plus from "react-native-vector-icons/Feather";
import Trash from "react-native-vector-icons/Feather";
import { Dimensions } from "react-native";

const Width = -Dimensions.get("window").width;
const circleRadius = 200;
const swipeDel = () => {
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
        TranslateX.value = withTiming(0,{duration:400});
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableOpacity onPress={()=>console.warn("Delete Clicked")} style={styles.trash}>
        <Trash style={{right: (-Width * .24)/2}} name="trash-2" size={20} color={"#fff"} />
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
  );
};

export default swipeDel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    // width: Size,
    // height: Size,
    backgroundColor: "teal",
    borderRadius: 16,
  },
  boundary: {
    height: circleRadius * 2,
    width: circleRadius * 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: circleRadius,
    borderWidth: 5,
    borderColor: "teal",
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
  trash: {
    backgroundColor: "#FEAD1D",
    position: "absolute",
    right:0,
    marginHorizontal:10,
    marginTop:10,
    height:94,
    width:-Width - 20,
    justifyContent:"center",
    alignItems:"flex-end",
    borderRadius:16
  },
});
