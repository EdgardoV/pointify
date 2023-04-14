/* eslint-disable no-undef */

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// -------------------- Async Storage -----------------------

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// -------------------- React Native Config -----------------------
jest.mock('react-native-config', () => jest.fn());

// -------------------- React Navigation --------------------

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),

  useNavigation: jest.fn(() => ({
    getState: jest.fn(),

    canGoBack: jest.fn(),

    addListener: jest.fn(),
  })),

  useRoute: jest.fn(() => ({
    name: '',
  })),
}));

// -------------------- React Redux --------------------
jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  const appColorScheme = 'light';
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return appColorScheme;
    }),
    useDispatch: jest.fn(),
    dispatch: jest.fn(),
  };
});

// -------------------- Dispatch --------------------
import {useDispatch} from 'react-redux';

useDispatch.mockReturnValue(jest.fn());
