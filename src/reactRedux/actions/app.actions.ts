import {
  AppActionTypes,
  ColorSchemeType,
  SET_COLOR_SCHEME,
} from '../types/app.types';

export const setAppColorScheme = (data: ColorSchemeType): AppActionTypes => ({
  type: SET_COLOR_SCHEME,
  data,
});
