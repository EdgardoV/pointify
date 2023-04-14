import React, {useEffect} from 'react';

import 'i18n';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {persistor, store, useDispatch} from 'reactRedux';
import {getProducts} from 'reactRedux/actions';
import NavContainer from 'routes/NavContainer';

const App = () => (
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);

const AppWrapper: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch(getProducts());
  };

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <NavContainer />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
