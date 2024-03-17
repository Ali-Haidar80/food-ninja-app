import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Onboard1 from "./Screens/Onboard1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationBarColor from 'react-native-navigation-bar-color';

import I from "react-native-vector-icons/Ionicons";
import Onboard2 from "./Screens/Onboard2";
import Starter from "./Screens/Starter";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import RegProcess from "./Screens/RegProcess";
import PayMethod from "./Screens/PayMethod";
import UpPhoto from "./Screens/UpPhoto";
import UpPreview from "./Screens/UpPreview";
import Location from "./Screens/Location";
import RegSuccess from "./Screens/RegSuccess";
import RegVerification from "./Screens/RegVerification";
import ForgetPassword from "./Screens/ForgetPasword";
import ResetPassword from "./Screens/ResetPassword";
import NewPassword from "./Screens/NewPassword";
import PassRestSuccess from "./Screens/PassRestSuccess";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Checkout from "./Screens/Checkout";
import Chat from "./Screens/Chat";
import { TransitionPresets } from "@react-navigation/native-stack";
import ExploreResturants from "./Screens/ExploreResturants";
import Filter from "./Screens/Filter";
import ExploreMenu from "./Screens/ExploreMenu";
import ChatDetail from "./Screens/ChatDetail";
import Call from "./Screens/Call";
import OrderRating from "./Screens/OrderRating";
import FoodRating from "./Screens/FoodRating";
import RateResturants from "./Screens/RateResturant";
import NotificationScreen from "./Screens/NotifyScreen";
import NotifyScreen from "./Screens/NotifyScreen";
import DetailResturant from "./Screens/DetailResturant";
import ReAnimation from "./Screens/ReAnimation";
import { useEffect, useState } from "react";
import DetailFood from "./Screens/DetailFood";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    // <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //     tabBarShowLabel: true,
    //     tabBarStyle: {
    //       marginBottom: 10,
    //       borderRadius: 15,
    //       backgroundColor: "#252525",
    //       // paddingVertical:90,
    //       height:74,
    //       marginHorizontal: 10,
    //       position: "absolute",
    //       // bottom:-10,
    //       // width: "100%",
    //       borderTopWidth: 0,
    //       display:"flex",
    //       // justifyContent:"center",
    //       // alignItems:"center"

    //     }
    //   })}
    // >
    //   <Tab.Screen name="Home" component={Home} options={{
    //     tabBarIcon:({focused})=>{
    //       <View style={{
    //         position:"absolute",
    //         top:"50%",
    //         backgroundColor:"#ffddaa"
    //       }}>
    //         <I  name="eye-off" size={20} color="#53E88B"></I>
    //       </View>
    //     }
    //   }} />
    //   <Tab.Screen name="Profile" component={Profile} />
    //   <Tab.Screen name="Checkout" component={Checkout} />
    //   <Tab.Screen name="Chat" component={Chat} />
    // </Tab.Navigator>
    <stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
        presentation: "card",
      }}
    >
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Profile" component={Profile} />
      <stack.Screen name="Checkout" component={Checkout} />
      <stack.Screen name="Chat" component={Chat} />
    </stack.Navigator>
  );
}

export default function App() {
  const [tour,setTour] = useState("false")
  const [isAuth,setisAuth] = useState("false")
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('tour');
      const LoggedValue = await AsyncStorage.getItem('isAuthenticated');
      if (value !== null || LoggedValue !== null) {
        // We have data!!
        console.log(value);
        setTour(value)
        setisAuth(LoggedValue)
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

 useEffect(()=>{
retrieveData()
 },[])
  return (
    <NavigationContainer>
      <StatusBar hidden={true} style="light" backgroundColor="#15BE77" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          presentation: "card",
        }}
      >
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="ReAnimation" component={ReAnimation} />
        <Stack.Screen name="PassRestSuccess" component={PassRestSuccess} />
        <Stack.Screen name="DetailResturant" component={DetailResturant} />
        <Stack.Screen name="DetailFood" component={DetailFood} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="RegVerification" component={RegVerification} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="RegSuccess" component={RegSuccess} />
        <Stack.Screen name="UpPreview" component={UpPreview} />
        <Stack.Screen name="PayMethod" component={PayMethod} />
        <Stack.Screen name="UpPhoto" component={UpPhoto} />
        <Stack.Screen name="RegProcess" component={RegProcess} />
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Onboard2" component={Onboard2} />
        <Stack.Screen name="ExploreResturants" component={ExploreResturants} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="ExploreMenu" component={ExploreMenu} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} />
        <Stack.Screen name="NotifyScreen" component={NotifyScreen} />
        <Stack.Screen name="RateResturants" component={RateResturants} />
        <Stack.Screen name="FoodRating" component={FoodRating} />
        <Stack.Screen name="OrderRating" component={OrderRating} />
        <Stack.Screen name="Call" component={Call} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff9f1c",
    alignItems: "center",
    justifyContent: "center",
  },
});
