import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { type CustomSvgProps } from './types';
import { View } from 'react-native';

function ArrowForwardIcon({
  style,
  color = 'white',
  ...props
}: CustomSvgProps) {
  return (
    <View style={style}>
      <Svg width="18" height="18" fill="none" viewBox="0 0 18 18" {...props}>
        <Circle cx="9" cy="9" r="9" fill="#000" fillOpacity="0.2"></Circle>
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.539 7.615 9 11.077l3.462-3.462"
        ></Path>
      </Svg>
    </View>
  );
}

export default ArrowForwardIcon;
