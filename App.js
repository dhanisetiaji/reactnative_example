import React from 'react'
import Home from './src/screens/Home'
import DetailProduct from './src/screens/DetailProduct'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{

        headerTitleStyle: {
          fontSize: 15,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: 'red',
        },
      }}>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} options={{ title: 'Detail Product', }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;