import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import BottomNavBar from "../components/BottomNavBar";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExploreResturants = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <ScrollView>
        <TopBar />
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, color: "#fff",fontWeight:'bold' }}>
            Nearest Restaurant
          </Text>
        </View>
        <View style={{flexDirection:"row",flexWrap:"wrap",paddingHorizontal:40,gap:20}}>
     <TouchableOpacity onPress={()=>navigation.navigate('DetailResturant')} style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/vegan.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Vegan Resto</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>12 Mins</Text>
      </TouchableOpacity>
      <View style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/healthy.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Healthy Food</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>8 Mins</Text>
      </View>
      <View style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/gfood.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Good Food</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>12 Mins</Text>
      </View>
      <View style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/smart.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Smart Resto</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>8 Mins</Text>
      </View>
      <View style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/vgan.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Vegan Retso</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>12 Mins</Text>
      </View>
      <View style={{backgroundColor:"#252525",width:140,height:180,justifyContent:"center",alignItems:"center",borderRadius:15}}>
              <Image style={{}} source={require('./../Images/resturants/hfood.png')} />
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Healthy Food</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>8 Mins</Text>
      </View>
     </View>
      </ScrollView>

      <View style={{ marginTop: 95 }}>
        <BottomNavBar root={{ name: "Home" }} />
      </View>
    </View>
  );
};

export default ExploreResturants;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0d0d0d",
    flex: 1,
    position: "relative",
  },
});
