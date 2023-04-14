import React from 'react';
import {useSelector} from 'react-redux';

import {SafeArea} from 'components/atoms/SafeArea';
import {RootState} from 'reactRedux/reducers';
import {ProductType} from 'reactRedux/types';
import {ProductsStackParams} from 'utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import DashboardScreen from './DashboardScreen';

const DashboardController: React.FC = () => {
  const data = useSelector((state: RootState) => state.products);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<ProductsStackParams>>();

  const onPressItem = (product: ProductType) => {
    navigate('Details', {data: product});
  };

  return (
    <SafeArea>
      <DashboardScreen data={data} onPressItem={onPressItem} />
    </SafeArea>
  );
};

export default DashboardController;
