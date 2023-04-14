import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ProductType} from 'reactRedux/types';
import {ImageComponent} from './ImageComponent';
import {TextContainer} from './TextContainer';
import Theme from 'theme';
import {useColorScheme} from 'hooks/useColorScheme';
import {formatDate, formatNumber} from 'utils';
import {TextSpan} from 'components/atoms/TextSpan';
import IconArrow from 'assets/svg/icon-arrow';

interface Props {
  product: ProductType;
  onPress: (product: ProductType) => void;
}

const ProductTile: React.FC<Props> = ({product, onPress}: Props) => {
  const {colorScheme} = useColorScheme();
  const {container, data, points, arrow} = styles;

  return (
    <TouchableOpacity onPress={() => onPress(product)}>
      <View testID="product-container" style={container}>
        <View>
          <ImageComponent testID="product-image" uri={product.image} />
        </View>
        <View style={data}>
          <TextContainer
            text={product.product}
            textColor={Theme.Colors.PrimaryText[colorScheme]}
            fontWeight="Bold"
            fontSize={14}
          />
          <TextContainer
            text={formatDate(product.createdAt)}
            textColor={Theme.Colors.PrimaryText[colorScheme]}
            fontWeight="Regular"
            fontSize={12}
          />
        </View>
        <View style={points}>
          <TextSpan>
            <TextSpan
              text={product.isRedemption ? '-' : '+'}
              textColor={
                product.isRedemption
                  ? Theme.Colors.Red
                  : Theme.Colors.ToxicSludge
              }
              fontWeight="Bold"
              fontSize={16}
            />
            <TextSpan
              text={formatNumber(product.points)}
              textColor={Theme.Colors.PrimaryText[colorScheme]}
              fontWeight="Bold"
              marginLeft={12}
            />
          </TextSpan>
        </View>
        <View style={arrow}>
          <IconArrow />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  data: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  points: {
    flex: 1,
    justifyContent: 'center',
  },
  arrow: {
    justifyContent: 'center',
  },
});

export {ProductTile};
