import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import TopBar from '../components/TopBar'
import FullGbutton from '../components/FullGbutton'

const Filter = () => {
    function navigates1() {
        console.log("clicked");
    }
  return (
    <View style={styles.main}>


        <TopBar />
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.FilterByTypesText}>
            Type
          </Text>
        </View>
        <View style={{flexDirection:"row",marginHorizontal:20,columnGap:20}}>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}>Restaurants</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}>Menu</Text>
      </TouchableOpacity>
     
     </View>
     <View
          style={{
            margin: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.FilterByTypesText}>
            Location
          </Text>
        </View>
        <View style={{flexDirection:"row",marginHorizontal:20,columnGap:20}}>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}>1 Km</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}> {">"}10 Km</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}>{"<10 Km"}</Text>
      </TouchableOpacity>
     
     </View>
     <View
          style={{
            margin: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.FilterByTypesText}>
            Food
          </Text>
        </View>
        <View style={{flexDirection:"row",marginHorizontal:20,columnGap:20,rowGap:20,flexWrap:"wrap"}}>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}>Cake</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}> Soup </Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}>Main Course</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}>Appetizer</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.FilterBtnBg}>
              
              <Text style={styles.FilterBtnText}>Desert</Text>
      </TouchableOpacity>
     
     </View>
    


        <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <FullGbutton navi={navigates1} name="Search" />
      </View>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
    main: {
      backgroundColor: "#0d0d0d",
      flex: 1,
      position: "relative",
    },
    FilterBtnBg:{
        backgroundColor:"#252525",justifyContent:"center",alignItems:"center",borderRadius:15
    },
    FilterBtnText:{
        color:"rgba(255,255,255,0.5)",paddingHorizontal:20,paddingVertical:15
    },FilterByTypesText:{
        fontSize: 20, color: "#fff",fontWeight:'bold'
    }
  });