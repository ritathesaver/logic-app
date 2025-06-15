import React, { type FunctionComponent, memo, useCallback } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { type IIconTextButtonProps } from './types';

const IconTextButton: FunctionComponent<IIconTextButtonProps> = ({
  disabled,
  hitSlop,
  onPress,
  style,
  iconRight,
  title,
  activeBgColor = '#00000033',
  pressedBgColor = '#00000055',
}) => {
  const animatedValue = useSharedValue(0);

  const onPressIn = useCallback(() => {
    animatedValue.value = withTiming(1, {
      duration: 100,
      easing: Easing.out(Easing.quad),
    });
  }, []);

  const onPressOut = useCallback(() => {
    animatedValue.value = withTiming(0, {
      duration: 100,
      easing: Easing.out(Easing.quad),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animatedValue.value,
      [0, 1],
      [activeBgColor, pressedBgColor],
    ),
  }));

  return (
    <View style={[styles.container, style]}>
      <Pressable
        disabled={disabled}
        hitSlop={hitSlop}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={styles.touchContainer}
      >
        <Animated.View
          style={[
            styles.wrapper,
            animatedStyle,
            disabled && styles.disabledContainer,
          ]}
        >
          <Text style={styles.title}>{title}</Text>
          {iconRight && <View>{iconRight}</View>}
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: Platform.OS === 'android' ? 'hidden' : undefined,
  },
  touchContainer: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 5,
    paddingVertical: 8,
    borderRadius: 40,
  },
  disabledContainer: {
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 12,
    color: 'white',
    paddingRight: 3,
  },
});

export default memo(IconTextButton);
