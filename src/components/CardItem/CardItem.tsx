import React, { memo, type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICardItemProps } from './types';
import TurboImage from 'react-native-turbo-image';

const CardItem: FC<ICardItemProps> = ({ name, bgColor, image }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.imageContainer}>
        <TurboImage style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingVertical: 12,
    fontSize: 14,
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
});

export default memo(CardItem);
