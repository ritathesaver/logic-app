import React, { memo, type FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ICardItemProps } from './types';
import TurboImage from 'react-native-turbo-image';
import Text from '../Text/Text';

const CardItem: FC<ICardItemProps> = ({ name, bgColor, image }) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <View style={styles.imageContainer}>
          <TurboImage style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </View>
      <View style={styles.backBlock} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  container: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingVertical: 12,
    fontSize: 14,
    lineHeight: 12,
  },
  imageContainer: {
    paddingVertical: 9,
    paddingHorizontal: 33,
  },
  textContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  image: {
    height: 144,
    width: 144,
  },
  backBlock: {
    position: 'absolute',
    bottom: -12,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#E5E8FE',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: -1,
  },
});

export default memo(CardItem);
