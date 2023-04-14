import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsStackParams} from 'utils/types';
import DashboardController from 'screens/app/Dashboard/DashboardController';
import DetailsController from 'screens/app/Details/DetailsController';

const Stack = createNativeStackNavigator<ProductsStackParams>();

const ProductsStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={DashboardController} />
    <Stack.Screen name="Details" component={DetailsController} />
  </Stack.Navigator>
);

export default ProductsStack;
