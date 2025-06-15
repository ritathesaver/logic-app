import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IHeaderProps } from './types';
import Text from '../Text/Text';

const Header: React.FC<IHeaderProps> = ({
  title,
  isRightButtonShown = true,
  rightIcon,
}) => {
  const navigation = useNavigation();
  const { left, right } = useSafeAreaInsets();
  const onPress = () => navigation.goBack();

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {
            paddingLeft: Math.max(left, 16),
            paddingRight: Math.max(right, 16),
          },
        ]}
      >
        <View style={styles.iconWrapper} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconWrapper}>
          {isRightButtonShown && (
            <TouchableOpacity hitSlop={32} onPress={onPress}>
              {rightIcon}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  iconWrapper: {
    width: 48,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: -0.1,
    color: 'black',
  },
});

export default Header;
