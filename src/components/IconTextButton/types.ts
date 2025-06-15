import { ReactNode } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';

export interface IIconTextButtonProps {
  disabled?: boolean;
  hitSlop?: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconRight?: ReactNode;
  title?: string;
  activeBgColor?: string;
  pressedBgColor?: string;
}
