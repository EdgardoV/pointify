import {useEffect, useState} from 'react';
import {useColorScheme as useSystemColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setAppColorScheme} from 'reactRedux/actions';
import {RootState} from 'reactRedux/reducers';
import {ColorSchemeType} from 'reactRedux/types/app.types';

type ColorSchemeReturnType = 'light' | 'dark';

export function useColorScheme(): {
  colorScheme: ColorSchemeReturnType;
  changeColorScheme: (scheme: ColorSchemeType) => void;
} {
  const dispatch = useDispatch();
  const systemColorScheme = useSystemColorScheme();

  const {appColorScheme} = useSelector((state: RootState) => state.app);

  const [colorScheme, setColorScheme] =
    useState<ColorSchemeReturnType>('light');

  const changeColorScheme = (scheme: ColorSchemeType) => {
    dispatch(setAppColorScheme(scheme));
  };

  useEffect(() => {
    if (appColorScheme === 'system') {
      setColorScheme(systemColorScheme || 'light');
    } else {
      setColorScheme(appColorScheme);
    }
  }, [systemColorScheme, appColorScheme]);

  return {colorScheme, changeColorScheme};
}
