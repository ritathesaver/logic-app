import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { type CustomSvgProps } from './types';
import { View } from 'react-native';

function CrossIcon({ style, color = '#A3B3D0', ...props }: CustomSvgProps) {
  return (
    <View style={style}>
      <Svg width="22" height="22" fill="none" viewBox="0 0 22 22" {...props}>
        <Path
          fill={color}
          fillRule="evenodd"
          d="M7.172 5.05A1.5 1.5 0 0 0 5.05 7.172L8.878 11 5.05 14.828a1.5 1.5 0 1 0 2.122 2.122L11 13.12l3.828 3.829a1.5 1.5 0 1 0 2.121-2.122L13.121 11l3.828-3.828a1.5 1.5 0 1 0-2.121-2.122L11 8.88z"
          clipRule="evenodd"
        ></Path>
      </Svg>
    </View>
  );
}

export default CrossIcon;
