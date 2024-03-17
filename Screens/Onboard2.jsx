// import { View, Text } from 'react-native'
// import React from 'react'
// import Onboard from '../components/Onboard';

// const Onboard2 = () => {
//     const heading = "Food Ninja is Where Your Comfort Food Lives";
//     const subHeading =
//       "Enjoy a fast and smooth food delivery at your doorstep";
//     const btnText = "Next";
//     const imgadd = require("./../Images/onb2.png")
//     return <Onboard heading={heading} imgadd={imgadd} subHeading={subHeading} btnText={btnText} />;
//   };

// export default Onboard2

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Gbutton from "../components/Gbutton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboard2 = () => {
  const navigation = useNavigation();
  const btnText = "Next";
  async function navigates() {
    await AsyncStorage.setItem("tour", "True");
    navigation.navigate("Login");
  }
  return (
    <View style={styles.main}>
      <StatusBar hidden={true} />
      <View style={{ marginTop: 40 }}>
        <Image
          style={{ height: 400, width: "100%" }}
          source={require("./../Images/onb2.png")}
        />
      </View>
      <View>
        <View style={{ marginHorizontal: 50, paddingHorizontal: 10 }}>
          <Text
            style={{
              color: "#fff",
              marginTop: 15,
              marginHorizontal: 20,
              fontSize: 22,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Food Ninja is Where Your Comfort Food Lives
          </Text>
        </View>
        <View style={{ marginHorizontal: 50, paddingHorizontal: 10 }}>
          <Text
            style={{
              color: "#fff",
              marginTop: 15,
              marginHorizontal: 30,
              fontSize: 12,
              textAlign: "center",
              fontWeight: "300",
            }}
          >
            Enjoy a fast and smooth food delivery at your doorstep
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Gbutton navi={navigates} name={btnText} />
        </View>
      </View>
    </View>
  );
};

export default Onboard2;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0D0D0D",
    flex: 1,
  },
});
