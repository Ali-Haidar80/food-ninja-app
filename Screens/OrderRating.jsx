import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderRatingTemplate from '../components/OrderRatingTemplate'
import { useNavigation } from '@react-navigation/native'

const OrderRating = () => {
    const text = "Order Completed"
    const subText = "Please Rate Your Last Driver"
    const dp = require('./../Images/chat/dp.png')
    const navigation = useNavigation()
    function navi(){
        navigation.navigate('FoodRating')
    }
  return (
    <View style={styles.main}>
      <OrderRatingTemplate text={text} subText={subText} dp={dp} navi={navi}/>
    </View>
  )
}

export default OrderRating

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#0d0d0d",
        flex: 1,
        position: "relative",
      },
})