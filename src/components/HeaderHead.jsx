import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { Header } from '@rneui/base';
const HeaderHead = ({ navigation }) => {
    return (
        <>
            <Header
                containerStyle={{ backgroundColor: '#379cd6' }} 
                
                leftComponent={<TouchableOpacity onPress={()=>navigation.goBack()}>
                     <Icon
              name='arrow-back'
              type="material"
              color={'white'}
              style={{width: 40,marginBottom:5,alignItems:'center'}}
              size={30}
            /></TouchableOpacity>}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={<TouchableOpacity>
                    <Icon
             name='logout'
             type="material"
             color={'white'}
             style={{width: 40,marginBottom:5,alignItems:'center'}}
             size={30}
           /></TouchableOpacity>}
            />

        </>
    )
}
export default HeaderHead

