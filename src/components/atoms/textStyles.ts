import {StyleSheet} from 'react-native';
import Theme from '../../theme';

const typographyLightStyle = StyleSheet.create({
  header: {
    fontSize: Theme.Sizes.Heading,
    fontFamily: Theme.Fonts.Medium,
    color: Theme.Colors.PrimaryText.light,
  },
  title: {
    fontSize: Theme.Sizes.Title,
    fontFamily: Theme.Fonts.Medium,
    color: Theme.Colors.PrimaryText.light,
  },
  subtitle: {
    fontFamily: Theme.Fonts.Bold,
    fontSize: Theme.Sizes.Subtitle,
    color: Theme.Colors.PrimaryText.light,
  },
  paragraph: {
    fontSize: Theme.Sizes.Paragraph,
    fontFamily: Theme.Fonts.Regular,
    color: Theme.Colors.PrimaryText.light,
  },
  caption1: {
    fontSize: Theme.Sizes.Caption1,
    fontFamily: Theme.Fonts.Regular,
    color: Theme.Colors.PrimaryText.light,
  },
  caption2: {
    fontSize: Theme.Sizes.Caption2,
    fontFamily: Theme.Fonts.Regular,
    color: Theme.Colors.PrimaryText.light,
  },
});

const typographyDarkStyle = StyleSheet.create({
  header: {
    fontSize: Theme.Sizes.Heading,
    fontFamily: Theme.Fonts.Medium,
    color: Theme.Colors.PrimaryText.dark,
  },
  title: {
    fontSize: Theme.Sizes.Title,
    fontFamily: Theme.Fonts.Medium,
    color: Theme.Colors.PrimaryText.dark,
  },
  subtitle: {
    fontFamily: Theme.Fonts.Regular,
    fontSize: Theme.Sizes.Subtitle,
    color: Theme.Colors.PrimaryText.dark,
  },
  paragraph: {
    fontSize: Theme.Sizes.Paragraph,
    fontFamily: Theme.Fonts.Regular,
    color: Theme.Colors.PrimaryText.dark,
  },
  caption1: {
    fontSize: Theme.Sizes.Caption1,
    fontFamily: Theme.Fonts.Regular,
    color: Theme.Colors.PrimaryText.dark,
  },
  caption2: {
    fontSize: Theme.Sizes.Caption2,
    fontFamily: Theme.Fonts.Regular,
    color: Theme.Colors.PrimaryText.dark,
  },
});

export {typographyLightStyle, typographyDarkStyle};
