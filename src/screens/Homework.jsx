import react from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/HeaderHead'
const Homework = () => {
    return (
        <>
            <View>
                <Header />
                <ScrollView style={{backgroundColor:'white',height:'100%', padding: 20 }}>
                    <View style={{ width: '100%', height: 100 ,marginBottom:20,borderWidth:1,borderRadius:5}}>
                        <View style={{ flexDirection: 'row' ,justifyContent:'space-between',padding:5}}>
                            <Text style={{fontSize:16,color:'#006eff'}}>Bangal</Text>
                            <Text style={{borderBottomColor:'white',borderBottomWidth:1,color:'#006eff',borderColor:"black"}}>View</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',paddingLeft:5}}>
                            <View>
                                <Text style={{fontSize:16,color:'black',fontWeight:'600'}}>Created</Text>
                                <Text style={{color:'#006eff'}}>Date</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:16,color:'black',fontWeight:'600'}}>Submission</Text>
                                <Text style={{color:'#006eff'}}>Date</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:16,color:'black',fontWeight:'600'}}>Evaluation</Text>
                                <Text style={{color:'#006eff'}}>Date</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:16,color:'black',fontWeight:'600'}}>Status</Text>
                                <Text style={{color:'#006eff'}}>Date</Text>
                            </View>
                        </View>
                    </View>


                    
                    </ScrollView>
                </View>
        </>
    )
}
export default Homework