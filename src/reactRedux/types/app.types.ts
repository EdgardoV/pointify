export const SET_COLOR_SCHEME = 'SET_COLOR_SCHEME';

export type ColorSchemeType = 'light' | 'dark' | 'system';

export interface AppInterface {
  appColorScheme: ColorSchemeType;
}

interface SetColorSchemeAction {
  type: typeof SET_COLOR_SCHEME;
  data: ColorSchemeType;
}

export type AppActionTypes = SetColorSchemeAction;
