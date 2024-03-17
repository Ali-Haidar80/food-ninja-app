import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import BottomNavBar from "../components/BottomNavBar";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/TopBar";

const Home = () => {
  const navigation = useNavigation();
  // const currentroute = useRoute();
  // const [root, setRoot] = useState(currentroute);
  // console.log(route.name);
  return (
    <View style={styles.main}>
      {/* <Text style={{ color: "#fff" }}>Home</Text> */}
<ScrollView>

    <TopBar />
      <View>
        <LinearGradient
          style={styles.bg}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={["#53E88B", "#15BE77"]}
        >
          <Image
            style={{ width: Dimensions.get("window").width - 40 }}
            source={require("./../Images/deal.png")}
          />
          <View style={{ position: "absolute", right: 5, top: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Special Deal For
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Octobor</Text>
            <View
              onPress={() => console.warn("Clicked")}
              style={{
                backgroundColor: "#fff",
                // paddingHorizontal: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
                alignItems:"center",
                // width:60
                marginRight:60,
                paddingHorizontal:23,
                paddingVertical:15,
                borderRadius:10,
                marginTop:10

              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold", color:"#15BE77" }}>Buy Now</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={{margin:20,flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:15,color:"#fff",fontWeight:'bold'}}>Nearest Restaurant</Text>
        <Text onPress={()=>navigation.navigate('ExploreResturants')} style={{color:"#FF8E4C"}}>View More</Text>
      </View>

     <View style={{flexDirection:"row"}}>
     <View style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",marginHorizontal:20,borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/vegan.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Vegan Resto</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>12 Mins</Text>
      </View>
      <View style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",marginHorizontal:20,borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/healthy.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Healthy Food</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>8 Mins</Text>
      </View>
      <View style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",marginHorizontal:20,borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/vegan.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Vegan Resto</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>12 Mins</Text>
      </View>
     </View>
      <View style={{margin:20,flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:15,color:"#fff",fontWeight:'bold'}}>Popular Menu</Text>
        <Text onPress={()=>navigation.navigate('ExploreMenu')} style={{color:"#FF8E4C"}}>View More</Text>
      </View>
      <View style={{backgroundColor:"rgba(50, 50, 50, 0.1)",width:Dimensions.get('window').width-40,height:90,paddingLeft:10,paddingRight:20,marginHorizontal:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:15}}>
              <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
              <Image style={{}} source={require('./../Images/menuItems/gnoddle.png')} />
              <View>
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Green Nodle</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>Nodle Home</Text>
              </View>
              </View>
              <Text style={{fontSize:25,color:"#FEAD1D"}}>$15</Text>
      </View>

</ScrollView>
      {/* BotomBar */}
      <View style={{marginTop:95}}>
      <BottomNavBar root={{name:"Home"}}/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0d0d0d",
    flex: 1,
    position: "relative",
  },
  
  bg: {
    height: 150,
    width: Dimensions.get("window").width - 40,
    borderRadius: 15,
    marginTop: 6,
    marginHorizontal: 20,
    position: "relative",
    
  },
});
