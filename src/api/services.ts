import axios from 'axios';
import { API_URL } from '../consts/routes';
import { TThemeType } from '../globalTypes/types';

export const getThemes = async (): Promise<TThemeType[]> => {
  try {
    const response = await axios.get<TThemeType[]>(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTags = async (): Promise<string[]> => {
  try {
    const response = await axios.get<TThemeType[]>(API_URL);
    const tags = [
      'Все темы',
      ...Array.from(
        new Set(
          response.data.reduce((acc, theme) => {
            return acc.concat(theme.tags);
          }, [] as string[]),
        ),
      ),
    ];

    return tags;
  } catch (error) {
    throw error;
  }
};
