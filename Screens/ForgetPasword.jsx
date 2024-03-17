import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Gbutton from "../components/Gbutton";
import IconE from "react-native-vector-icons/FontAwesome";

const ForgetPassword = () => {
  const navigation = useNavigation();
  function navigates() {
    navigation.goBack();
  }
  function navigates1() {
    navigation.navigate("ResetPassword");
  }
  return (
    <View style={styles.main}>
      <View style={{ position: "relative" }}>
        <Image
          style={[styles.pattern, { transform: [{ rotate: "0deg" }] }]}
          source={require("./../Images/group.png")}
        />
      </View>
      <TouchableOpacity
        style={styles.bg}
        onPress={() => {
          navigates();
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 25,
            marginBottom: 10,
          }}
        >
          <Image
            style={{ marginTop: 10, position: "absolute", top: 0, left: 20 }}
            source={require("./../Images/back.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 65, marginLeft: 20, marginRight: 85 }}>
        <Text
          style={{
            color: "#fff",
            lineHeight: 32,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Forgot password?
        </Text>
      </View>
      <View style={{ marginTop: 25, marginLeft: 20, marginRight: 85 }}>
        <Text
          style={{
            color: "#fff",
            lineHeight: 21,
            fontSize: 12,
            fontWeight: "400",
          }}
        >
          Select which contact details should we use to reset your password
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.warn("clickd");
        }}
      >
        <View style={styles.container}>
          <View style={{ marginHorizontal: 20 }}>
            <Image
              style={styles.input}
              source={require("./../Images/msgico.png")}
            />
          </View>
          <View style={{}}>
            <Text style={{ color: "#828282" }}>Via sms:</Text>
            <View style={{ display:"flex",flexDirection:"row",alignItems:"center", color: "#fff", fontWeight: "bold",marginTop:10 }}>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{fontSize: 20,marginRight:10, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ color: "#fff" }}>
                4235
              </Text>
                 
              
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.warn("clickd");
        }}
      >
        <View style={styles.container}>
          <View style={{ marginHorizontal: 20 }}>
            <Image
              style={styles.input}
              source={require("./../Images/mailico.png")}
            />
          </View>
          <View style={{}}>
            <Text style={{ color: "#828282" }}>Via email:</Text>
            <View style={{ display:"flex",flexDirection:"row",alignItems:"center", color: "#fff", fontWeight: "bold",marginTop:10 }}>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{ fontSize: 20,marginRight:3, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              <Text style={{fontSize: 20,marginRight:10, color: "#fff" }}>
                <IconE name="circle" />
              </Text>
              
              <Text style={{ color: "#fff" }}>
                @gmail.com
              </Text>
                 
              
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <Gbutton navi={navigates1} name="Next" />
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  pattern: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  container: {
    display: "flex",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    marginHorizontal: 15,
    marginTop: 20,
    paddingVertical: 20,
  },
});
