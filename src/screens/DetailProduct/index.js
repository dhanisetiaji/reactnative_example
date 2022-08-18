import React from 'react'
import { View, Text } from 'react-native'


const DetailProduct = ({ route }) => {
    const { productId } = route.params;
    return (
        <View>
            <Text>Detail prduk {productId}</Text>
        </View>
    )
}


export default DetailProduct