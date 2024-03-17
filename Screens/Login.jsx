import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import IconE from "react-native-vector-icons/Entypo";
import Icn from "react-native-vector-icons/Fontisto";
import I from "react-native-vector-icons/Ionicons";
import Gbutton from "../components/Gbutton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const [show,setShow] = useState(false)
    const navigation = useNavigation();
  const setUserLogged = async ()=>{
    await AsyncStorage.setItem('isAuthenticated',"Yes")
  }
  const removeTour = async ()=>{
    await AsyncStorage.removeItem('tour')
  }
  function navigates() {
    navigation.navigate("ForgetPassword");
  }
  function navigatestoReg() {
    navigation.navigate("Register");
  }
  function navigates1() {
    setUserLogged()
    removeTour()
    navigation.navigate("HomeScreen");
  }
  
  return (
    <View style={styles.main}>
      <View>
        <Image
          style={styles.pattern}
          source={require("./../Images/Pattern.png")}
        />
      </View>
      <View style={{ display: "flex", alignItems: "center", marginTop: 25 }}>
        <Image
          style={{ marginTop: 10 }}
          source={require("./../Images/Logo.png")}
        />
        <Text style={{ color: "#53E88B", fontSize: 42, fontWeight: "800" }}>
          FoodNinja
        </Text>
        <Text style={{ color: "#fff" }}>Deliever Favorite Food</Text>
      </View>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        useAngle={true}
        angle={140}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={["#0D0D0D", "rgba(0, 0, 0, 0.00)"]}
        style={{ marginTop: 30, padding: 20 }}
      >
       
      </LinearGradient>
    
      <View style={styles.searchSection}>
        <IconE style={styles.searchIcon} name="mail" size={20} color="#53E88B" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#555"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.searchSection}>
        <Icn style={styles.searchIcon} name="locked" size={20} color="#53E88B" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#555"}
          secureTextEntry={show}
          underlineColorAndroid="transparent"
        />
        {
            show ?
            <I style={styles.searchIcon} onPress={()=>{setShow(false)}} name="eye-off" size={20} color="#53E88B" />
            :
            <I style={styles.searchIcon} onPress={()=>{setShow(true)}} name="eye" size={20} color="#53E88B" />
        }
            
      </View>
      <Text onPress={()=>navigates()} style={{textAlign:"center",marginTop:15,textDecorationLine:"underline",color:"#53E88B"}}>Forgot Your Password?</Text>
      <View style={{
        display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}>
        <Gbutton navi={navigates1} name="Login"/>
      </View>
      <Text onPress={()=>navigatestoReg()} style={{textAlign:"center",marginTop:15,textDecorationLine:"underline",color:"#53E88B"}}>Don't have an Account Sign Up now?</Text>

    
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  pattern: {
    position: "absolute",
    top: -10,
    right: 0,
    width: "100%",
  },
  searchSection: {
    display: "flex",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#555",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    marginHorizontal: 25,
    marginVertical:10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchIcon: {
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#f4f4f4",
  },
});
