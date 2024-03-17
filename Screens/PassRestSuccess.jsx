import React from 'react'
import SuccessScreen from '../components/SuccessScreen'
import { useNavigation } from '@react-navigation/native'

const PassRestSuccess = () => {
    const navigation = useNavigation()

    function navigates() {
        navigation.navigate("Login");
      }
  return (
    <SuccessScreen navigates={navigates} title="Password reset succesful" />
  )
}

export default PassRestSuccess