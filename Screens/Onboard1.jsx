// import { View, Text } from "react-native";
// import React from "react";
// import Onboard from "../components/Onboard";
import { useNavigation } from '@react-navigation/native';

// const Onboard1 = () => {
//   const navigation = useNavigation()
//     function navigates() {
//         navigation.navigate('Onboard2')
//     }
//   const heading = "Find your Comfort Food here";
//   const subHeading =
//     "Here You Can find a chef or dish for every taste and color. Enjoy!";
//   const btnText = "Next";
//   const imgadd = "./../Images/onb1.png"
//   return <Onboard navigates={navigates} imgadd={imgadd} heading={heading} subHeading={subHeading} btnText={btnText} />;
// };

// export default Onboard1;


import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Gbutton from "../components/Gbutton";

const Onboard1 = () => {
  const navigation = useNavigation()
  const btnText = "Next";

  function navigates() {
            navigation.navigate('Onboard2')
        }
  return (
    <View style={styles.main}>
      <StatusBar hidden={true} />
      <View style={{ marginTop: 40 }}>
        <Image
          style={{ height: 400, width: "100%" }}
          source={require('./../Images/onb1.png')}
        />
      </View>
      <View>
        <View style={{marginHorizontal:50,paddingHorizontal:25}}>
        <Text style={{color:"#fff",marginTop:15,marginHorizontal:20,fontSize:22,textAlign:"center",fontWeight:'bold'}}>Find your Comfort Food here</Text>
        </View>
        <View style={{marginHorizontal:50,paddingHorizontal:10}}>
          <Text style={{color:"#fff",marginTop:15,marginHorizontal:30,fontSize:12,textAlign:"center",fontWeight:"300"}}>
          Here You Can find a chef or dish for every taste and color. Enjoy!
          </Text>
        </View>
        <View style={{display:'flex',justifyContent:"center",alignItems:'center',marginTop:20}}>
            

            <Gbutton navi={navigates} name={btnText}/>
            
        </View>
      </View>
    </View>
  );
};

export default Onboard1;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0D0D0D",
    flex: 1,
  },
});
