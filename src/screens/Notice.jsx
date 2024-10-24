import React from "react";
import { View,Text } from "react-native";
import Header from "../components/HeaderHead";
const Notice =()=>{
    return(
        <>
        <View style={{height:'100%'}}>
            <Header />
            <View  style={{height:'100%',alignItems:'center',justifyContent:'center'}}>
            <Text  style={{fontSize:16,fontWeight:'bold',color:'#000'}}>
                No data available
            </Text>
            </View>
        </View>
        </>
    )
}
export default Notice