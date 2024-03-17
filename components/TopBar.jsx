import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import I from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const TopBar = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ position: "relative" }}>
        <Image
          style={[
            styles.pattern,
            { transform: [{ rotate: "0deg" }], opacity: 0.2 },
          ]}
          source={require("./../Images/group.png")}
        />
      </View>
      <View style={{ marginTop: 55, marginLeft: 20, marginRight: 85 }}>
        <Text
          style={{
            color: "#fff",
            // lineHeight: 32,
            fontSize: 45,
            fontWeight: "bold",
          }}
        >
          Find Your
        </Text>
        <Text
          style={{
            color: "#fff",
            // lineHeight: 32,
            fontSize: 45,
            fontWeight: "bold",
          }}
        >
          Favorite Food
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotifyScreen")}
          style={{
            position: "absolute",
            right: -45,
            top: 10,
            backgroundColor: "rgba(200,200,200,0.2)",
            borderRadius: 15,
            padding: 12,
          }}
        >
          <I name="bell" size={35} color="#53E88B" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="What do you want to order?"
            placeholderTextColor={"#555"}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Filter')}
          style={{
            backgroundColor: "#262626",
            paddingHorizontal: 15,
            paddingVertical: 18,
            borderRadius: 15,
          }}
        >
          <Image source={require("./../Images/Filter.png")} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    pattern: {
        position: "absolute",
        top: 0,
        right: 0,
      },
      searchSection: {
        // display: "flex",
        width: Dimensions.get("window").width - 100,
        borderRadius: 16,
        borderWidth: 1,
        // borderColor: "#555",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#262626",
        // marginHorizontal: 25,
        marginVertical: 10,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: "rgba(90, 108, 234, 0.07)",
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      searchIcon: {
        paddingHorizontal: 20,
      },
      input: {
        // flex: 1,
        paddingVertical: 15,
        paddingRight: 80,
    
        paddingLeft: 0,
        color: "#f4f4f4",
      }

})