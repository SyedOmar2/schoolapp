import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import Header from '../components/HeaderHead'
import Hometab from '../components/Hometab'
const Home = ({navigation}) => {
    return(
        <>
        <View>
            <Header/>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20,padding:10}}>
                
                <TouchableOpacity onPress={()=>navigation.navigate('Childern')}>
                    <Hometab name="person" title="Child"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('About')}>
                    <Hometab name="info" title="About"/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
                    <Hometab name="settings" title="Setting"/>
                </TouchableOpacity>
                
            </View>
            </View>
        </View>
        </>
    )
}
export default Home
