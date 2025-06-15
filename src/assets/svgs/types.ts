import { type ViewStyle } from 'react-native';
import { type SvgProps } from 'react-native-svg';

export type CustomSvgProps = {
  style?: ViewStyle;
  color?: string;
  size?: number;
} & SvgProps;
