import React, { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { getThemes } from '../../api/services';
import { TThemeType } from '../../globalTypes/types';
import CardItem from '../../components/CardItem/CardItem';
import { ThemesScreenNavigationProp } from '../../navigation/types';
import IconTextButton from '../../components/IconTextButton/IconTextButton';
import ArrowInCircleIcon from '../../assets/svgs/ArrowInCircleIcon';

const ThemesScreen: FC = () => {
  const navigation = useNavigation<ThemesScreenNavigationProp>();
  const [allThemes, setAllThemes] = useState<TThemeType[]>([]);
  const [themes, setThemes] = useState<TThemeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedTag, setSelectedTag] = useState<string>('Все темы');

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const data = await getThemes();
        setAllThemes(data);
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
    if (selectedTag === 'Все темы') {
      setThemes(allThemes);
      return;
    }
    const filteredThemes = allThemes.filter((item: TThemeType) =>
      item.tags.includes(selectedTag),
    );
    setThemes(filteredThemes);
  }, [selectedTag, allThemes]);

  const navigateToChooseTheme = () => {
    navigation.navigate('ChooseTheme', {
      selectedTag,
      setSelectedTag,
    });
  };

  const renderItem = useCallback(
    ({ item }: { item: TThemeType }) => (
      <CardItem name={item.name} bgColor={item.bgColor} image={item.image} />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <IconTextButton
          hitSlop={32}
          title={selectedTag}
          onPress={navigateToChooseTheme}
          iconRight={<ArrowInCircleIcon />}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={themes}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            initialNumToRender={5}
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
    paddingTop: 12,
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
