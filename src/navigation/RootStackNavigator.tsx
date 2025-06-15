import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackStackParamList } from './types';
import ThemesScreen from '../screens/ThemesScreen/ThemesScreen';
import ChooseThemeScreen from '../screens/ChooseThemeScreen/ChooseThemeScreen';
import Header from '../components/Header/Header';
import CrossIcon from '../assets/svgs/CrossIcon';

const Stack = createNativeStackNavigator<RootStackStackParamList>();

const RootStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Themes">
      <Stack.Screen
        options={{ headerShown: false }}
        name={'Themes'}
        component={ThemesScreen}
      />
      <Stack.Screen
        options={{
          header: () => <Header rightIcon={<CrossIcon />} title="Выбор темы" />,
        }}
        name={'ChooseTheme'}
        component={ChooseThemeScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
