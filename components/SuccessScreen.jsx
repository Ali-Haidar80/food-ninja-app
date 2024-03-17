import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Gbutton from '../components/Gbutton';

const SuccessScreen = ({navigates,title}) => {
  
    

  return (
    <View style={styles.main}>
        <View>
        <Image
          style={styles.pattern}
          source={require("./../Images/Pattern.png")}
        />
        </View>   
       <View style={{flex:7,justifyContent:'center',alignItems:'center',marginTop:40}}>
        <Image style={{marginTop:10}} source={require('./../Images/congrats.png')} />
        <Text style={{color:'#53E88B',fontSize:42,fontWeight:"800"}}>Congrats!</Text>
        <Text style={{color:"#fff", fontSize: 25,
            fontWeight: "bold",}}>{title}</Text>
       </View>
       <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <Gbutton navi={navigates} name="Try Order" />
      </View>
    </View>
  )
}

export default SuccessScreen

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#0d0d0d"
        
    },
    pattern:{
        position: 'absolute',
        top:-10,
        right:0,
        width:'100%',
    }
})