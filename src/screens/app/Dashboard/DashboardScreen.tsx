import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, StyleSheet, View} from 'react-native';

import {
  Button,
  Card,
  Header,
  ProductTile,
  TextContainer,
} from 'components/molecules';
import {useColorScheme} from 'hooks';
import Theme from 'theme';
import {ProductsType, getMonth} from 'utils';
import {ProductType, ProductsInterface} from 'reactRedux/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  data: ProductsInterface;
  onPressItem: (product: ProductType) => void;
}

const DashboardScreen: React.FC<Props> = ({data, onPressItem}: Props) => {
  const {products, earned, redeemed, total} = data;

  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const {colorScheme} = useColorScheme();
  const {
    container,
    listContainer,
    list,
    contentContainerStyle,
    filtersContainer,
    buttonLeft,
    button,
  } = styles;

  const [displayType, setDisplayType] = useState<ProductsType>('all');
  const [displayProducts, setDisplayProducts] = useState(products);

  const renderItem = useCallback(
    ({item}: {item: ProductType}) => (
      <ProductTile product={item} onPress={onPressItem} />
    ),
    [onPressItem],
  );

  useEffect(() => {
    switch (displayType) {
      case 'earned':
        setDisplayProducts(earned);
        break;
      case 'redeemed':
        setDisplayProducts(redeemed);
        break;
      case 'all':
        setDisplayProducts(products);
        break;
    }
  }, [displayType, earned, products, redeemed]);

  return (
    <View
      style={[
        container,
        {
          backgroundColor: Theme.Colors.Background[colorScheme],
          paddingBottom: insets.bottom + 15,
        },
      ]}>
      <View>
        <Header />
        <TextContainer
          text={t('home:yourPoints').toUpperCase()}
          fontWeight="Bold"
          fontSize={14}
          textColor={Theme.Colors.DolphinGray}
          marginVertical={20}
        />
        <Card title={getMonth(new Date())} points={total} />
        <TextContainer
          text={t('home:yourMoves').toUpperCase()}
          fontWeight="Bold"
          fontSize={14}
          textColor={Theme.Colors.DolphinGray}
          marginVertical={20}
        />
      </View>
      <View style={listContainer}>
        <FlatList
          data={displayProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={[
            list,
            {
              backgroundColor: Theme.Colors.Box[colorScheme],
            },
          ]}
          contentContainerStyle={contentContainerStyle}
        />
        <View style={filtersContainer}>
          {displayType === 'all' ? (
            <>
              <Button
                label={t('global:earned')}
                onPress={() => setDisplayType('earned')}
                style={buttonLeft}
              />
              <Button
                label={t('global:redeemed')}
                onPress={() => setDisplayType('redeemed')}
              />
            </>
          ) : (
            <Button
              label={t('global:all')}
              onPress={() => setDisplayType('all')}
              style={button}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  list: {
    flex: 1,
    borderRadius: 10,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 23,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    marginTop: 43,
  },
  buttonLeft: {
    marginRight: 13,
  },
  button: {
    paddingHorizontal: 13,
  },
});

export default DashboardScreen;
