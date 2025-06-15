import type { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface RootStackStackParamList extends ParamListBase {
  Themes: undefined;
  ChooseTheme: {
    selectedTag: string;
    setSelectedTag: (val: string) => void;
  };
}

export type ThemesScreenNavigationProp = NativeStackNavigationProp<
  RootStackStackParamList,
  'Themes',
  'ChooseTheme'
>;

type ChooseThemeRouteProp = RouteProp<RootStackStackParamList, 'ChooseTheme'>;

export type TChooseThemeProps = {
  route: ChooseThemeRouteProp;
};
