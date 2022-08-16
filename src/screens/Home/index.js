import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { commonStyle } from './helper/commonStyle';
const style = StyleSheet.create({
    header: {
        backgroundColor: '#5b79cf',
        padding: 10,
        elevation: 3, //elevation
        marginBottom: 10, //elevation
        shadowColor: '#5b79cf', //elevaiton (android 9)
    },
    cardBalance: {
        backgroundColor: '#5b79cf',
        padding: 10,
        margin: 10,
        borderRadius: 15,
    }
})
const Home = () => {
    return (<>
        <ScrollView>
            <View style={style.header}>
                <View style={[commonStyle.flexBetween, commonStyle.flexRow]}>
                    <Text style={commonStyle.textWhite}>Home</Text>
                    <Text style={commonStyle.textWhite}>X</Text>
                </View>
            </View>
            <Image source={require('./assets/image/logo.png')} style={{
                width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
            }} />
            {/* <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png' }} style={{
        width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
      }} /> */}
            <View style={style.cardBalance}>
                <Text style={[commonStyle.textWhite, { fontWeight: '100' }]}>Balance</Text>
                <Text style={[commonStyle.textWhite, { fontWeight: 'bold', fontSize: 25 }]}>Rp 5.000.000</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Pressable onPress={() => alert('awok')} style={{ backgroundColor: "#5b79cf", padding: 10, borderRadius: 10, }} android_ripple={{
                    color: "#fff",
                }}>
                    <Text style={commonStyle.textWhite}>View Detail</Text>
                </Pressable>
            </View>

            {/* <TouchableOpacity onPress={() => alert('awok')} style={{ backgroundColor: "#5b79cf", padding: 5, borderRadius: 10, }}>
        <Text style={commonStyle.textWhite}>View Detail</Text>
      </TouchableOpacity> */}
            {/* <View style={commonStyle.flexRow}>
        <View style={{ flex: 1, backgroundColor: 'blue', height: 50 }}></View>
        <View style={{ flex: 1, backgroundColor: 'red', height: 50 }}></View>
        <View style={{ flex: 10, backgroundColor: 'green', height: 50 }}></View>
      </View> */}
        </ScrollView>
    </>);
};

export default Home;