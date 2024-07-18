import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Pages/HomeScreen';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="About Us" component={AboutUs} options={{headerShown: false}} />
        <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}} />
        <Stack.Screen name="Services" component={Services} options={{headerShown: false}} />
        <Stack.Screen name="Portfolio" component={Portfolio} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
