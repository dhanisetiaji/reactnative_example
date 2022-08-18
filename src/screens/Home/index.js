import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Pressable, TouchableOpacity, Image, SectionList, RefreshControl, ToastAndroid } from 'react-native';
import { commonStyle } from '../../../helper/commonStyle';
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

const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(false),
        [refetch, setRefetch] = useState(false)



    const [dataCoffe, setDataCoffe] = useState({
        "data": {
            "totalAllData": 0,
            "totalRows": 0,
            "totalPage": 0,
            "results": []
        }
    })

    useEffect(() => {
        setLoading(true);
        axios.get('http://192.168.1.13:3001/api/v1/product').then((res) => {
            setDataCoffe(res.data)
        }).catch((err) => {
            console.log(err, 'error') //pake toast
            ToastAndroid.show('Cek Koneksi Jaringan', ToastAndroid.SHORT)
        }).finally(() => {
            setLoading(false);
        })
    }, [refetch])
    return (<>
        <View>

            {/* <TouchableOpacity onPress={() => alert('awok')} style={{ backgroundColor: "#5b79cf", padding: 5, borderRadius: 10, }}>
        <Text style={commonStyle.textWhite}>View Detail</Text>
      </TouchableOpacity> */}
            {/* <View style={commonStyle.flexRow}>
        <View style={{ flex: 1, backgroundColor: 'blue', height: 50 }}></View>
        <View style={{ flex: 1, backgroundColor: 'red', height: 50 }}></View>
        <View style={{ flex: 10, backgroundColor: 'green', height: 50 }}></View>
      </View> */}
            <View style={style.header}>
                <View style={[commonStyle.flexBetween, commonStyle.flexRow]}>
                    <Text style={commonStyle.textWhite}>Home</Text>
                    <Text style={commonStyle.textWhite}>X</Text>
                </View>
            </View>
            <FlatList
                // horizontal={true}
                refreshControl={<RefreshControl refreshing={loading}
                    onRefresh={() => { setRefetch(!refetch) }} />}
                ListHeaderComponent={() => (
                    <>
                        <Image source={require('../../../assets/image/logo.png')} style={{
                            width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
                        }} />
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
                    </>
                )}
                data={dataCoffe.data.results}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#333' }} />}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct', {
                            productId: item.productId,
                        })}>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Image source={{ uri: item.productImage }} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                                <Text style={{ marginLeft: 15 }}>{item.productName}</Text>

                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            {/* <SectionList
                refreshControl={<RefreshControl refreshing={loading} onRefresh={onrefresh} />}
                sections={[
                    { sectionTitle: 'Popular', data: [{ title: 'aowkoa', subtitle: 'eheheh' }, { title: 'aowkoa', subtitle: 'eheheh' }, { title: 'aowkoa', subtitle: 'eheheh' }, { title: 'aowkoa', subtitle: 'eheheh' }] },
                    { sectionTitle: 'Recommended', data: [{ title: 'aowkoa', subtitle: 'eheheh' }, { title: 'aowkoa', subtitle: 'eheheh' }] },
                ]}
                keyExtractor={(item, index) => item + index}
                renderItem={() => null}
                renderSectionHeader={({ section: { sectionTitle, data } }) => (<>
                    <Text style={{ fontWeight: 'bold', color: '#333' }}>{sectionTitle}</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ background: '#aaa', padding: 12 }}><Text style={{ color: '#333' }}>{item.title} {item.subtitle}</Text></View>
                            )
                        }}
                    />
                </>)}
            /> */}
        </View>
    </>);
};

export default Home;