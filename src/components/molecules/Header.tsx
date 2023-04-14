import React from 'react';
import {View} from 'react-native';
import {TextContainer} from './TextContainer';
import {useTranslation} from 'react-i18next';
import {useColorScheme} from 'hooks/useColorScheme';
import Theme from 'theme';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({title}: Props) => {
  const {t} = useTranslation();
  const {colorScheme} = useColorScheme();

  return (
    <View>
      <TextContainer
        text={title || t('home:welcome')}
        fontWeight="Bold"
        fontSize={16}
        textColor={Theme.Colors.PrimaryText[colorScheme]}
      />
      <TextContainer
        text="Edgardo Victorino Marín"
        fontWeight="Regular"
        fontSize={14}
        textColor={Theme.Colors.PrimaryText[colorScheme]}
      />
    </View>
  );
};

export {Header};
