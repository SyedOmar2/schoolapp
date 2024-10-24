import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import HeaderHead from "../components/HeaderHead";
import Hometab from "../components/Hometab";
const Examination = ({navigation}) => {
    return(
        <>
        <View>
            <HeaderHead/>
            <View style={{marginTop:20}}>
                <View style={{flexDirection:'row',paddingTop:10,paddingLeft:20}}>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Schedule')}}>
                    <Hometab name="article" title="Schedule"/>
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginLeft:18}} onPress={()=>{navigation.navigate('Result')}}>
                    <Hometab name="article" title="Result"/>
                </TouchableOpacity>
                
            </View>
            </View>
        </View>
        </>
    )
}
export default Examination