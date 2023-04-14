import {
  AppActionTypes,
  AppInterface,
  SET_COLOR_SCHEME,
} from '../types/app.types';

const initialState: AppInterface = {
  appColorScheme: 'system',
};

export default function AppReducer(
  state: AppInterface = initialState,
  action: AppActionTypes,
): AppInterface {
  switch (action.type) {
    case SET_COLOR_SCHEME:
      return {
        ...state,
        appColorScheme: action.data,
      };
    default:
      return state;
  }
}
