import React, { FC, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { getTags } from '../../api/services';
import { TChooseThemeProps } from '../../navigation/types';

const ChooseThemeScreen: FC<TChooseThemeProps> = ({ route }) => {
  const navigation = useNavigation();
  const { selectedTag, setSelectedTag } = route.params;
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data = await getTags();
        setTags(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  const navigateBack = (item: string) => {
    setSelectedTag(item);
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      onPress={() => navigateBack(item)}
      style={item === selectedTag ? styles.selectedItem : styles.item}
    >
      <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={tags}
            renderItem={renderItem}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ChooseThemeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    height: 6,
    width: '100%',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#C5D0E6',
  },
  selectedItem: {
    borderRadius: 12,
    backgroundColor: '#5CBB73',
  },
  title: {
    fontSize: 18,
  },
});
