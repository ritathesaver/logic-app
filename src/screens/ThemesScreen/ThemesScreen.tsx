import React, { FC, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { getThemes } from '../../api/services';
import { TThemeType } from '../../types/types';
import CardItem from '../../components/CardItem/CardItem';
import { ThemesScreenNavigationProp } from '../../navigation/types';

const ThemesScreen: FC = () => {
  const navigation = useNavigation<ThemesScreenNavigationProp>();
  const [themes, setThemes] = useState<TThemeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedTag, setSelectedTag] = useState<string>('Все темы');

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const data = await getThemes();
        setThemes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  useEffect(() => {
    const filteredThemes = themes.filter((item: TThemeType) => {
      item.tags.includes(selectedTag);
    });
    setThemes(filteredThemes);
  }, [selectedTag]);

  const navigateToChooseTheme = () => {
    navigation.navigate('ChooseTheme', {
      selectedTag,
      setSelectedTag,
    });
  };

  const renderItem = ({ item }: { item: TThemeType }) => (
    <TouchableOpacity onPress={() => navigateToChooseTheme()}>
      <CardItem name={item.name} bgColor={item.bgColor} image={item.image} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={themes}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ThemesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7446EE',
  },
  separator: {
    width: 18,
    height: '100%',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  imageContainer: {
    padding: 16,
    height: 32,
    width: 32,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
