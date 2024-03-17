import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'
import BottomNavBar from '../components/BottomNavBar'

const ExploreMenu = () => {
  return (
    <View style={styles.main}>
         <TopBar />
        <ScrollView>
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.FilterByTypesText}>
            Popular Menu
          </Text>
        </View>
        <View style={{flexDirection:"column",rowGap:15}}>
        <View style={{backgroundColor:"rgba(100, 100, 100, 0.3)",width:Dimensions.get('window').width-40,height:90,paddingLeft:10,paddingRight:20,marginHorizontal:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:15}}>
              <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
              <Image style={{}} source={require('./../Images/menuItems/pancake.png')} />
              <View>
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Herbal Pancake</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>Warung Herbal</Text>
              </View>
              </View>
              <Text style={{fontSize:25,color:"#FEAD1D",fontWeight:"bold"}}>$7</Text>
      </View>
        <View style={{backgroundColor:"rgba(100, 100, 100, 0.3)",width:Dimensions.get('window').width-40,height:90,paddingLeft:10,paddingRight:20,marginHorizontal:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:15}}>
              <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
              <Image style={{}} source={require('./../Images/menuItems/salad.png')} />
              <View>
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Fruit Salad</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>Wijie Resto</Text>
              </View>
              </View>
              <Text style={{fontSize:25,color:"#FEAD1D",fontWeight:"bold"}}>$5</Text>
      </View>
        <View style={{backgroundColor:"rgba(100, 100, 100, 0.3)",width:Dimensions.get('window').width-40,height:90,paddingLeft:10,paddingRight:20,marginHorizontal:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:15}}>
              <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
              <Image style={{}} source={require('./../Images/menuItems/gnoddle.png')} />
              <View>
              <Text style={{marginTop:10,color:"#fff",fontSize:16,fontWeight:"400"}}>Green Nodle</Text>
              <Text style={{marginTop:3,color:"rgba(255,255,255,0.5)"}}>Nodle Home</Text>
              </View>
              </View>
              <Text style={{fontSize:25,color:"#FEAD1D",fontWeight:"bold"}}>$15</Text>
      </View>
        </View>
        </ScrollView>
        <View style={{marginTop:95}}>
      <BottomNavBar root={{name:"Home"}}/>
      </View>
    </View>
  )
}

export default ExploreMenu

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#0d0d0d",
        flex: 1,
        position: "relative",
      },FilterByTypesText:{
        fontSize: 20, color: "#fff",fontWeight:'bold'
    }
})