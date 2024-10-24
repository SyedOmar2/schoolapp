import React from "react";
import { View, Text } from "react-native";
import Header from "../components/HeaderHead";
import { Image } from "react-native-elements";
import img from '../img/download.jpg'
const About = () => {
    return (
        <>
            <View>
                <Header />
                <View style={{padding:30}}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <Image
                        source={img}
                        style={{width:90,height:50}}
                        />
                        <Text style={{color:'black',marginLeft:10}}>Infix Edu</Text>
                    </View>

                    <View style={{marginTop:10}}>
                        <Text style={{color:'black',fontSize:18,marginBottom:10}}> About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us  About Us</Text>
                    </View>
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <Text style={{color:'black',fontSize:16}}>Address:</Text>
                        <Text style={{color:'black',marginLeft:5,fontSize:16}}>89/2 Panthapath, Dhaka 1215, Bangaladesh</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'black',fontSize:16}}>Phone:</Text>
                        <Text style={{color:'black',marginLeft:5,fontSize:16}}>89029302390</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'black',fontSize:16}}>Email:</Text>
                        <Text style={{color:'black',marginLeft:5,fontSize:16}}>info@aponese.com</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
export default About