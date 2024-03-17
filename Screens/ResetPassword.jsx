import { View, Text } from 'react-native'
import React from 'react'
import VerificationScreen from '../components/VerificationScreen'
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {

    const navigation = useNavigation();
    function navigates1() {
        navigation.navigate("NewPassword");
      }
  return (
    <VerificationScreen navigates1={navigates1} />
  )
}

export default ResetPassword