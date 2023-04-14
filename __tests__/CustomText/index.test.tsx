import React from 'react';
import renderer from 'react-test-renderer';
import {CustomText, CustomTextProps} from 'components/atoms/CustomText';

describe('CustomText', () => {
  const props: CustomTextProps = {
    text: 'Test CustomText',
    typography: 'paragraph',
    textColor: '#000000',
    textAlign: 'left',
    fontWeight: 'Regular',
    fontSize: 16,
    numberOfLines: 1,
    transform: 'none',
    underline: false,
    allowFontScaling: true,
    spacing: 0,
    lineHeight: 20,
  };

  it('renders correctly with props', () => {
    const tree = renderer.create(<CustomText {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without props', () => {
    const tree = renderer
      .create(<CustomText text="Test CustomText" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
