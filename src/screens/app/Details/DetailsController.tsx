import React from 'react';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductsStackParams} from 'utils';
import {SafeArea} from 'components/atoms';
import Theme from 'theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';

const DetailsController: React.FC = () => {
  const {
    params: {data},
  } = useRoute<RouteProp<ProductsStackParams, 'Details'>>();
  const {goBack} =
    useNavigation<NativeStackNavigationProp<ProductsStackParams>>();

  return (
    <SafeArea topBGColor={Theme.Colors.PalePhthaloBlue}>
      <DetailsScreen product={data} goBack={goBack} />
    </SafeArea>
  );
};

export default DetailsController;
