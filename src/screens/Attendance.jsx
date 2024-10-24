import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import Header from "../components/HeaderHead";
import Hometab from "../components/Hometab";
const Attendance = ({navigation}) => {
    return (
        <>
        <View>
            <Header/>


            <View style={{flexDirection:'row',marginTop:20,padding:10 }}>
                
            <TouchableOpacity style={{margin:10}} onPress={()=>{navigation.navigate('SearchAttendance')}}>
                    <Hometab name="person" title="Search Attendence"/>
                </TouchableOpacity>

            </View>
        </View>
        </>
    )
}
export default Attendance