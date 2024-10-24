import React from "react";
import { View,Text } from "react-native";
import Header from "../components/HeaderHead";
const Subject = () => {
    return(
        <>
        <View>
            <Header/>
            <View style={{padding:20}}>
                
                <View style={{width:'100%',height:"auto",padding:5,marginTop:10,borderRadius:10,borderWidth:1,borderColor:'black'}}>
                    <Text style={{fontSize:16,color:'black',fontWeight:'600'}}>Teacher Name</Text>
                    <Text style={{color:'#006eff'}}>Subject Name</Text>
                    <Text style={{color:'#006eff'}}>Subject Type</Text>
                </View>
            </View>
        </View>
        </>
    )
}
export default Subject;