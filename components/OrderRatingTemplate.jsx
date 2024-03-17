import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Edit from "react-native-vector-icons/Feather";

const OrderRatingTemplate = ({ text, subText, dp, navi }) => {
  const imgPath = dp;
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled = require("./../Images/stars/filledstar.png");
  const starImageCorner = require("./../Images/stars/emptystar.png");
  const starImageactive = require("./../Images/stars/activestar.png");
  return (
    <View style={{flex: 1,
      position: "relative",}}>
      <View>
        <Image
          style={styles.pattern}
          source={require("./../Images/Pattern.png")}
        />
      </View>
      <View style={{ top: "20%", alignItems: "center" }}>
        <LinearGradient
          style={{
            bottom: 0,
            left: -50,
            width: 15,
            height: 15,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
        ></LinearGradient>
        <LinearGradient
          style={{
            top: 30,
            right: -90,
            width: 12,
            height: 12,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
        ></LinearGradient>
        <LinearGradient
          style={{
            width: 158,
            height: 158,
            borderRadius: 100,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
        >
          <Image
            style={{ width: 150, height: 150, borderRadius: 100 }}
            source={imgPath}
          />
        </LinearGradient>
        <LinearGradient
          style={{
            top: -20,
            left: -80,
            width: 10,
            height: 10,
            borderRadius: 100,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
        ></LinearGradient>
        <LinearGradient
          style={{
            top: -20,
            right: -70,
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
        ></LinearGradient>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Thank You!
        </Text>
        <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
          {text}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            marginTop: 10,
            fontWeight: "400",
          }}
        >
          {subText}
        </Text>

        <View style={styles.customRatingBarStyle}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={key}
                onPress={() => setDefaultRating(item)}
              >
                <Image
                  style={styles.starImageStyle}
                  source={
                    item <= defaultRating - 1
                      ? starImageFilled
                      : item == defaultRating
                      ? starImageactive
                      : starImageCorner
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            top: Dimensions.get("window").height / 7,
            alignItems: "center",
          }}
        >
          <View style={styles.searchSection}>
            <Edit
              style={styles.searchIcon}
              size={25}
              name="edit"
              color="#53E88B"
            />
            <TextInput
              style={styles.input}
              placeholder="What do you want to order?"
              placeholderTextColor={"#555"}
              underlineColorAndroid="transparent"
            />
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", columnGap:15}}
          >
            <TouchableOpacity
              onPress={() => {
                navi();
              }}
              >
              <LinearGradient
                style={styles.bg}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                useAngle={true}
                angle={140}
                angleCenter={{ x: 0.5, y: 0.5 }}
                colors={["#53E88B", "#15BE77"]}
              >
                <Text style={styles.btn_text}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#262626",borderRadius:15, width:85,height:57,alignItems:"center",justifyContent:"center" }}>
              <Text style={[styles.btn_text,{color:"#53E88B"}]}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderRatingTemplate;

const styles = StyleSheet.create({
  
  pattern: {
    position: "absolute",
    top: -10,
    right: 0,
    width: "100%",
  },
  customRatingBarStyle: {
    position: "relative",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    columnGap: 30,
  },
  starImageStyle: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  searchSection: {
    width: Dimensions.get("window").width - 40,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    marginVertical: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchIcon: {
    paddingHorizontal: 15,
  },
  input: {
    height: 60,
    paddingRight: 80,
    fontSize: 16,
    paddingLeft: 0,
    color: "#f4f4f4",
  },
  bg: {
    // backgroundColor: "#54d2d2",
    height:60,
    width:Dimensions.get("window").width-140,
    borderRadius: 15,
//    marginTop:6,
//    marginHorizontal:20,
   display:"flex",
   alignItems:'center',
   justifyContent:"center"
  //  verticalAlign:'midd'
  },
  btn_text: { color: "white", fontWeight: "500", fontSize: 16 , textAlign:'center'},
});
