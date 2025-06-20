import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

const Text = (props: TextProps) => (
  <RNText
    {...props}
    style={[{ fontFamily: 'Nunito-ExtraBold' }, props.style]}
  />
);

export default Text;
