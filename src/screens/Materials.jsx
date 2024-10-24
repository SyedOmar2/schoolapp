import React from "react";
import { Text, View, ScrollView,TouchableOpacity } from "react-native";
import Hometab from "../components/Hometab";
import Header from "../components/HeaderHead";
const Materials = () => {
    return(
        <>
        <View>
            <Header/>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20,padding:10}}>
                
                <TouchableOpacity>
                    <Hometab name="apps" title="Assignment"/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Hometab name="apps" title="Syllabus"/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Hometab name="apps" title="Downloads"/>
                </TouchableOpacity>
                
            </View>
            </View>
        </View>
        </>
    )
}
export  default Materials;
