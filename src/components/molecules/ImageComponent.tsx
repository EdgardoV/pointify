import {PLACEHOLDER_1} from 'assets/images';
import React, {ReactElement, useState} from 'react';
import {Image, ImageStyle, StyleSheet, View} from 'react-native';

interface Props {
  testID?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  placeholder?: ReactElement;
  style?: ImageStyle;
  uri: string;
  callback?: (data: boolean) => void;
}

const ImageComponent: React.FC<Props> = ({
  width = 55,
  height = 55,
  borderRadius = 10,
  placeholder,
  style,
  uri,
  callback,
}: Props) => {
  const [isImageLoadingError, setIsImageLoadingError] =
    useState<boolean>(false);
  const {container} = styles;

  const handleImageError = () => {
    setIsImageLoadingError(true);
    if (callback !== undefined) {
      callback(true);
    }
  };

  return (
    <View>
      {isImageLoadingError ? (
        <Image
          testID="product-image"
          source={placeholder || PLACEHOLDER_1}
          style={style || [container, {width, height}, {borderRadius}]}
          resizeMode="contain"
        />
      ) : (
        <Image
          testID="product-image"
          source={{uri}}
          style={style || [container, {width, height}, {borderRadius}]}
          onError={handleImageError}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});

export {ImageComponent};
