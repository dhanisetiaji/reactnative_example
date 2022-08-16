import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native';
import { commonStyle } from '../../../helper/commonStyle';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <ScrollView>
            <View style={[{ backgroundColor: '#fff', paddingHorizontal: 15, marginBottom: 15 }]}>
                <Text style={commonStyle.textBlack}>Email</Text>
                <View style={[commonStyle.flexRow, { backgroundColor: '#f0f0f0' }]}>
                    <TextInput placeholder="Masukkan Email..." style={{ padding: 5, borderRadius: 5, flex: 1 }} autoCapitalize='none' keyboardType='email-address' />
                </View>
            </View>
            <View style={[{ backgroundColor: '#fff', paddingHorizontal: 15, marginBottom: 15 }]}>
                <Text style={commonStyle.textBlack}>Password</Text>
                <View style={[commonStyle.flexRow, { backgroundColor: '#f0f0f0' }]}>
                    <TextInput placeholder="Masukkan Password..." style={{ padding: 5, borderRadius: 5, flex: 1 }} autoCapitalize='none' secureTextEntry={showPassword ? false : true} />
                    <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 5 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                </View>
            </View>
        </ScrollView>
    )
}


export default Login;