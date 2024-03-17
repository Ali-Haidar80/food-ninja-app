import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomNavBar from "../components/BottomNavBar";
import I from "react-native-vector-icons/Feather";

const Chat = () => {
  //
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={{ position: "relative" }}>
        <Image
          style={[
            styles.pattern,
            { transform: [{ rotate: "0deg" }], opacity: 0.3 },
          ]}
          source={require("./../Images/group.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() => console.log("Clcked back")}
        style={{
          position: "absolute",
          left: 30,
          top: 40,
          backgroundColor: "rgba(250,250,250,0.06)",
          borderRadius: 15,
          padding: 10,
        }}
        >
        <I name="chevron-left" size={30} color="#DA6317" />
      </TouchableOpacity>
      <View style={{ marginTop: 105, marginLeft: 30 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 45,
            fontWeight: "bold",
          }}
          >
          Chat
        </Text>
      </View>
          <ScrollView>
      <View style={{ flexDirection: "column", rowGap: 15, marginTop: 20 }}>
        <TouchableOpacity onPress={()=>navigation.navigate("ChatDetail")} style={styles.chatContainer}>
          <View style={styles.chatFirstDiv}>
            <Image
              style={{ marginTop: 15 }}
              source={require("./../Images/chat/a.png")}
            />
            <View style={{ marginTop: 10 }}>
              <Text
                style={styles.ChatuserName}
              >
                Anamwp
              </Text>
              <Text
                style={styles.message}
              >
                Your Order Just Arrived!
              </Text>
            </View>
          </View>
          <Text
            style={styles.messageArival}
          >
            20:00
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("ChatDetail")} style={styles.chatContainer}>
          <View style={styles.chatFirstDiv}>
            <Image
              style={{ marginTop: 15 }}
              source={require("./../Images/chat/g.png")}
            />
            <View style={{ marginTop: 10 }}>
              <Text
                style={styles.ChatuserName}
              >
                Guy Hawkins
              </Text>
              <Text
                style={styles.message}
              >
                Your Order Just Arrived!
              </Text>
            </View>
          </View>
          <Text
            style={styles.messageArival}
          >
            20:00
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("ChatDetail")} style={styles.chatContainer}>
          <View style={styles.chatFirstDiv}>
            <Image
              style={{ marginTop: 15 }}
              source={require("./../Images/chat/l.png")}
            />
            <View style={{ marginTop: 10 }}>
              <Text
                style={styles.ChatuserName}
              >
                Leslie Alexander
              </Text>
              <Text
                style={styles.message}
              >
                Your Order Just Arrived!
              </Text>
            </View>
          </View>
          <Text
            style={styles.messageArival}
          >
            20:00
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("ChatDetail")} style={styles.chatContainer}>
          <View style={styles.chatFirstDiv}>
            <Image
              style={{ marginTop: 15 ,height:64,width:64,borderRadius:16 }}
              source={require("./../Images/chat/dp.png")}
            />
            <View style={{ marginTop: 10 }}>
              <Text
                style={styles.ChatuserName}
              >
                Dora Elsy
              </Text>
              <Text
                style={styles.message}
              >
                Your Order Just Arrived!
              </Text>
            </View>
          </View>
          <Text
            style={styles.messageArival}
          >
            20:00
          </Text>
        </TouchableOpacity>
        
      </View>
      </ScrollView>
      {/* BotomBar */}
      <View style={{marginTop:95}}>
      <BottomNavBar root={{name:"Chat"}}/>
      </View>
    </View>
  );
};

export default Chat;

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
  },
  chatContainer: {
    backgroundColor: "rgba(100, 100, 100, 0.3)",
    width: Dimensions.get("window").width - 40,
    height: 90,
    paddingLeft: 10,
    paddingRight: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
  },
  chatFirstDiv:{ flexDirection: "row", gap: 20 },
  ChatuserName:{
    marginTop: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
  message:
  {
    marginTop: 7,
    fontSize: 18,
    color: "rgba(255,255,255,0.5)",
  },
  messageArival:{
    fontSize: 20,
    color: "rgba(255,255,255,0.3)",
    position: "absolute",
    right: 10,
    top: 10,
  },
});
