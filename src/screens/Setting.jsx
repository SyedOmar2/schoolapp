import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import Header from "../components/HeaderHead";
import { Image } from "react-native-elements";
import img from '../img/download.jpg'
const Setting = () => {
    return(
        <>
        <View>
            <Header/>
            <View style={{padding:20,height:"100%",backgroundColor:'white'}}>
                <TouchableOpacity>
                <View style={{width:'100%',height:'auto',backgroundColor:'white',borderBottomWidth:1,flexDirection:'row',alignItems:'center',padding:5}}>
                    <Image
                    source={(img)}
                    style={{width:50,height:50,borderRadius:100}}
                    />
                    <Text style={{color:"#8AB4F8",fontSize:16,marginLeft:10}}>Change Language</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={{width:'100%',height:'auto',backgroundColor:'white',borderBottomWidth:1,flexDirection:'row',alignItems:'center',padding:5}}>
                    <Image
                    source={(img)}
                    style={{width:50,height:50,borderRadius:100}}
                    />
                    <Text style={{color:"#8AB4F8",fontSize:16,marginLeft:10}}>Change Password</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}
export default Setting;