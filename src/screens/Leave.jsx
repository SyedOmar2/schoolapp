import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import HeaderHead from "../components/HeaderHead";
import Hometab from "../components/Hometab";
const Leave = () => {
    return(
        <>
        <View>
            <HeaderHead/>
            <View style={{marginTop:20}}>
                <View style={{flexDirection:'row',paddingTop:10,paddingLeft:20}}>
                
                <TouchableOpacity>
                    <Hometab name="edit-document" title="Apply Leave"/>
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginLeft:18}}>
                    <Hometab name="post-add" title="Leave List"/>
                </TouchableOpacity>
                
            </View>
            </View>
        </View>
        </>
    )
}
export default Leave