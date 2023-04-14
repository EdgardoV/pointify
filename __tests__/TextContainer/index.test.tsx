import React from 'react';
import renderer from 'react-test-renderer';
import {TextContainer} from 'components/molecules/TextContainer';

describe('TextContainer component', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(<TextContainer text="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom props', () => {
    const tree = renderer
      .create(
        <TextContainer
          text="Hello World"
          fontWeight="Bold"
          fontSize={16}
          textColor="red"
          marginLeft={10}
          marginTop={20}
          marginRight={5}
          marginBottom={15}
          textAlign="center"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
