import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
const Login = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <>
            <View style={{ height: 'auto', width: '100%', padding: 15, top: 150 }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: 'black', fontSize: 34, fontWeight: "600" }}>Login</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View>
                        <Text style={{ color: 'black', marginLeft: 15, paddingBottom: 10 }}>
                            UserName
                        </Text>
                        <Input
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            placeholder="Enter your username"
                            leftIconContainerStyle={{ marginLeft: 15 }}
                            inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                        />
                    </View>
                    <View>
                        <Text style={{ color: 'black', marginLeft: 15, paddingBottom: 10 }}>
                            Password
                        </Text>
                        <Input
                            leftIcon={{ type: 'material', name: 'lock' }} // Change to a Material icon if needed
                            placeholder="Enter your Password"
                            leftIconContainerStyle={{ marginLeft: 15 }}
                            inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                            secureTextEntry={!passwordVisible}  // Toggle password visibility
                            rightIcon={
                                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                    <Icon
                                        name={passwordVisible ? 'visibility-off' : 'visibility'} // Use Material icons for visibility
                                        type='material'
                                        size={24}
                                        color='black'
                                    />
                                </TouchableOpacity>
                            }
                            rightIconContainerStyle={{ marginRight: 15 }}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: "center" }}>
                    <Button
                        title="Log in"
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(78, 116, 289, 1)',
                            borderRadius: 5,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
                        containerStyle={{
                            marginHorizontal: 50,
                            height: 50,
                            width: 150,
                            marginVertical: 10,
                        }}
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>

            </View>
        </>
    );
};

export default Login;