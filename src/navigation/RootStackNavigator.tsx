import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackStackParamList } from './types';
import ThemesScreen from '../screens/ThemesScreen/ThemesScreen';
import ChooseThemeScreen from '../screens/ChooseThemeScreen/ChooseThemeScreen';

const Stack = createNativeStackNavigator<RootStackStackParamList>();

const RootStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Themes"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={'Themes'} component={ThemesScreen} />
      <Stack.Screen name={'ChooseTheme'} component={ChooseThemeScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
