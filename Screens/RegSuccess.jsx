import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SuccessScreen from '../components/SuccessScreen';

const RegSuccess = () => {
    const navigation = useNavigation()

    function navigates() {
        navigation.navigate("Login");
      }
    

  return (
    
        <SuccessScreen navigates={navigates} title="Your Profile Is Ready To Use" />
       
  )
}

export default RegSuccess

