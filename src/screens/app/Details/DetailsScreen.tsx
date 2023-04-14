import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView, StyleSheet} from 'react-native';

import {PLACEHOLDER_2} from 'assets/images';
import {Button, ImageComponent, TextContainer} from 'components/molecules';
import {useColorScheme} from 'hooks/useColorScheme';
import {ProductType} from 'reactRedux/types';
import Theme from 'theme';
import {formatDate, formatNumber} from 'utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  product: ProductType;
  goBack: () => void;
}

const DetailsScreen: React.FC<Props> = ({product, goBack}: Props) => {
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const {colorScheme} = useColorScheme();
  const {content, container, scrollView, image, bottom, button} = styles;

  const [isImageLoadingError, setIsImageLoadingError] =
    useState<boolean>(false);

  return (
    <View style={content}>
      <View style={{backgroundColor: Theme.Colors.PalePhthaloBlue}}>
        <TextContainer
          text={product.product}
          textColor={Theme.Colors.Black}
          fontSize={24}
          fontWeight="Bold"
          marginTop={50}
          marginBottom={24}
          marginHorizontal={24}
          numberOfLines={1}
        />
      </View>
      <ScrollView
        contentContainerStyle={[
          scrollView,
          {
            paddingBottom: insets.bottom + 15,
          },
        ]}
        bounces={false}>
        <View style={image}>
          <ImageComponent
            uri={product.image}
            placeholder={PLACEHOLDER_2}
            width={isImageLoadingError ? 200 : 353}
            height={isImageLoadingError ? 200 : 350}
            borderRadius={isImageLoadingError ? 0 : 10}
            callback={setIsImageLoadingError}
          />
        </View>
        <View
          style={[
            container,
            {backgroundColor: Theme.Colors.Background[colorScheme]},
          ]}>
          <TextContainer
            text={t('detail:productDetails')}
            textColor={Theme.Colors.DolphinGray}
            fontWeight="Bold"
            fontSize={14}
            marginTop={10}
          />
          <TextContainer
            text={t('detail:purchaseAt', {date: formatDate(product.createdAt)})}
            textColor={Theme.Colors.PrimaryText[colorScheme]}
            fontWeight="Bold"
            fontSize={16}
            marginVertical={20}
          />
          <TextContainer
            text={t('detail:withThisPurchase')}
            textColor={Theme.Colors.DolphinGray}
            fontWeight="Bold"
            fontSize={14}
          />
          <TextContainer
            text={t('detail:points', {points: formatNumber(product.points)})}
            fontSize={24}
            fontWeight="Bold"
            marginTop={32}
          />
          <View style={bottom}>
            <Button
              label={t('global:accept')}
              onPress={goBack}
              style={button}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  image: {
    width: 353,
    height: 350,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: Theme.Colors.White,
    borderRadius: 10,
    shadowColor: Theme.Colors.Black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  bottom: {
    flex: 1,
    marginTop: 35,
    justifyContent: 'flex-end',
  },
  button: {
    maxHeight: 50,
  },
});

export default DetailsScreen;
