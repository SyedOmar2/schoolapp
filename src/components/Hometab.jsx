import React from 'react'
import { View,Text } from 'react-native'
import {Icon } from 'react-native-elements';
const Hometab = (props) => {
    return(
        <>
        <View style={{width:95,height:95,backgroundColor:'#379cd6',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
        <Icon
              name={props.name}
              type="material"
              color={'white'}
              style={{width: 40,marginBottom:5,alignItems:'center'}}
              size={35}
            />
            <Text style={{fontSize:16,fontWeight:'600',color:'white',alignItems:'center',justifyContent:'center',alignSelf:'center',alignContent:'center'}}>{props.title}</Text>
        </View>
        </>
    )
}
export default Hometab
