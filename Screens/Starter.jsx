import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Starter = () => {
    const navigation = useNavigation()

    useEffect(async () => {
      const tour = await AsyncStorage.getItem("tour")
      setTimeout(() => {
        tour != "True" ? navigation.navigate('Onboard1'):null
      }, 3000);
    }, [])
    

  return (
    <View style={styles.main}>
        <View>
        <Image
          style={styles.pattern}
          source={require("./../Images/Pattern.png")}
        />
        </View>   
       <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:40}}>
        <Image style={{marginTop:10}} source={require('./../Images/Logo.png')} />
        <Text style={{color:'#53E88B',fontSize:42,fontWeight:"800"}}>FoodNinja</Text>
        <Text style={{color:"#fff"}}>Deliever Favorite Food</Text>
       </View>
    </View>
  )
}

export default Starter

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