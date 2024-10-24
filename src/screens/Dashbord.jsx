import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import Header from '../components/HeaderHead'
import Hometab from '../components/Hometab'
const Dashbord = ({navigation}) => {
    return(
        <>
        <View>
            <Header/>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:0,paddingTop:30,}}>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Homework')}}>
                    <Hometab name="auto-stories" title="Homework"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Materials')}}>
                    <Hometab name="library-books" title="Materials" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Timeline')}}>
                    <Hometab name="schedule" title="Timeline"/>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:0,paddingTop:10,}}>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Attendance')}}>
                    <Hometab name="group" title="Attandance"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Teacher')}}>
                    <Hometab name="person" title="Teacher"/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Examination')}}>
                    <Hometab name="quiz" title="Examination"/>
                </TouchableOpacity>
                
            </View>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:0,paddingTop:10,}}>
                
                <TouchableOpacity>
                    <Hometab name="layers" title="Lesson"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Leave')}}>
                    <Hometab name="night-shelter" title="Leave"/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Notice')}}>
                    <Hometab name="notifications-active" title="Notice"/>
                </TouchableOpacity>
                
            </View>
            </View>

            <View>
                <View style={{flexDirection:'row',paddingTop:10,paddingLeft:20}}>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Subject')}}>
                    <Hometab name="subject" title="Subjects"/>
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginLeft:18}} onPress={()=>{navigation.navigate('Setting')}}>
                    <Hometab name="settings" title="Setting"/>
                </TouchableOpacity>
                
            </View>
            </View>

        </View>
        </>
    )
}
export default Dashbord