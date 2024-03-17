import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import I from "react-native-vector-icons/Feather";
import IconE from "react-native-vector-icons/FontAwesome";
import Phone from "react-native-vector-icons/FontAwesome";
import Send from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ChatDetail = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <View>
        <Image
          style={styles.pattern}
          source={require("./../Images/Pattern.png")}
        />
        <TouchableOpacity
          onPress={() => console.log("Clcked back")}
          style={{
            position: "absolute",
            left: 30,
            top: 40,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: 15,
            padding: 10,
          }}
        >
          <I name="chevron-left" size={30} color="#DA6317" />
        </TouchableOpacity>
      </View>
      <View style={{ top: "20%" }}>
        <View
          style={{
            backgroundColor: "rgba(100, 100, 100, 0.3)",
            width: Dimensions.get("window").width - 40,
            height: 90,
            paddingLeft: 10,
            paddingRight: 20,
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Image style={{}} source={require("./../Images/chat/l.png")} />
            <View>
              <Text
                style={{
                  marginTop: 10,
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Leslie Alexander
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 3,
                }}
              >
                <IconE name="circle" color={"#53E88B"} />
                <Text style={{ color: "rgba(255,255,255,0.5)" }}>Online</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("Call")}
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              width: 40,
              borderRadius: 50,
            }}
          >
            <Phone  name="phone" size={25} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
<ScrollView style={{top:"21%"}}>

        <View
          style={{ flexDirection: "column", marginHorizontal: 20, rowGap: 20 }}
        >
          <TouchableOpacity style={[styles.FilterBtnBg,{borderTopLeftRadius:0}]}>
            <Text style={styles.FilterBtnText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              molestiae molestias illo ducimus. Accusantium nostrum ad ea
              officiis. Eligendi minus eos eveniet ipsa, vitae impedit hic eum
              laborum fugiat recusandae?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient  style={[styles.FilterBtnBg,{borderTopRightRadius:0}]} start={{x:0,y:0}} end={{x:1,y:0}} useAngle={true} angle={140} angleCenter={{x:0.5,y:0.5}}   colors={['#53E88B','#15BE77']}>
            <Text style={[styles.FilterBtnText,{color:"#fff"}]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              molestiae molestias illo ducimus. Accusantium nostrum ad ea
              officiis. Eligendi minus eos eveniet ipsa, vitae impedit hic eum
              laborum fugiat recusandae?
            </Text>

    


            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.FilterBtnBg,{borderTopLeftRadius:0}]}>
            <Text style={styles.FilterBtnText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              molestiae molestias illo ducimus. Accusantium nostrum ad ea
              officiis. Eligendi minus eos eveniet ipsa, vitae impedit hic eum
              laborum fugiat recusandae?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient  style={[styles.FilterBtnBg,{borderTopRightRadius:0}]} start={{x:0,y:0}} end={{x:1,y:0}} useAngle={true} angle={140} angleCenter={{x:0.5,y:0.5}}   colors={['#53E88B','#15BE77']}>
            <Text style={[styles.FilterBtnText,{color:"#fff"}]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              molestiae molestias illo ducimus.
            </Text>

    


            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.FilterBtnBg,{borderTopLeftRadius:0}]}>
            <Text style={styles.FilterBtnText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              molestiae molestias illo ducimus. Accusantium nostrum ad ea
              officiis. Eligendi minus eos eveniet ipsa, vitae impedit hic eum
              laborum fugiat recusandae?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient  style={[styles.FilterBtnBg,{borderTopRightRadius:0}]} start={{x:0,y:0}} end={{x:1,y:0}} useAngle={true} angle={140} angleCenter={{x:0.5,y:0.5}}   colors={['#53E88B','#15BE77']}>
            <Text style={[styles.FilterBtnText,{color:"#fff"}]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. lorem
            </Text>

    


            </LinearGradient>
          </TouchableOpacity>
        </View>
</ScrollView>
<View style={{marginTop:255}}>
      <View style={styles.sendMessageField}>
        <TextInput style={styles.input} placeholder="messae"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"/>
        <Send onPress={()=>console.warn('send Message')} style={styles.searchIcon} size={25} color={"#53E88B"} name="send"/>
      </View>
      </View>
    </View>
  );
};

export default ChatDetail;

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
    width: Dimensions.get("window").width,
    opacity: 0.2,
  },
  FilterBtnBg: {
    backgroundColor: "#252525",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    
  },
  FilterBtnText: {
    color: "rgba(255,255,255,0.5)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontWeight:"800"
  },
  sendMessageField:{
    // flex:1,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#252525",
    // paddingVertical:90,
    height: 74,
    marginHorizontal: 10,
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width - 20,
    borderTopWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    color: "#f4f4f4",
    fontSize:20
  },
  searchIcon: {
    paddingHorizontal: 20,
  }
});
