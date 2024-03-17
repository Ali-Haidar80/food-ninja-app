import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderRatingTemplate from '../components/OrderRatingTemplate'
import { useNavigation } from '@react-navigation/native'

const RateResturants = () => {
    const text = "Enjoy Your Meal"
    const subText = "Please Rate Your Resturants"
    const dp = require('./../Images/resturants/vegan.png')
    const navigation = useNavigation()
    function navi(){
        navigation.navigate('Home')
    }
  return (
    <View style={styles.main}>
      <OrderRatingTemplate text={text} subText={subText} dp={dp} navi={navi} />
    </View>
  )
}

export default RateResturants

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#0d0d0d",
        flex: 1,
        position: "relative",
      },
})