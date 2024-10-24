import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Header from "../components/HeaderHead";
import { Image } from "react-native-elements";
import img from '../img/download.jpg'
const Childern = ({navigation}) =>{
    return(
        <View style={{height:'100%',backgroundColor:'white'}}>
            <Header/>
            <View style={{padding:10}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Dashbord')}}>
            <View style={{width:'100%',height:'auto',backgroundColor:'white',flexDirection:'row',padding:20,borderWidth:1,borderRadius:5}}>
                <View style={{width:'25%',height:80,}}>
                    <Image
                    source={(img)}
                    style={{width:'100%',height:80,borderRadius:100}}
                    />
                </View>
                <View style={{width:'75%',height:80,padding:10}}>
                    <Text style={{color:"#8AB4F8",fontSize:18,}}>Name Of the Student</Text>
                    <Text style={{color:"gray"}}>Class</Text>
                </View>
            </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Childern