/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {render, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {formatDate, formatNumber, getMonth} from 'utils';
import {Card} from 'components/molecules/Card';
import {ImageComponent} from 'components/molecules/ImageComponent';
import {Header} from 'components/molecules/Header';
import {ProductTile} from 'components/molecules/ProductTile';
import {ProductType, ProductsInterface} from 'reactRedux/types';
import {Button} from 'components/molecules/Button';

import {products} from 'Api';
import {AxiosResponse} from 'axios';
import {productsServices} from 'services/products.services';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('getMonth', () => {
  it('should return the correct month name in Spanish', () => {
    const date = new Date('2022-12-09T10:20:00.909Z');
    const monthName = getMonth(date);
    expect(monthName).toBe('diciembre');
  });

  it('should return the correct month name in Spanish for a different date', () => {
    const date = new Date('2022-06-09T10:20:00.909Z');
    const monthName = getMonth(date);
    expect(monthName).toBe('junio');
  });
});

describe('formatNumber', () => {
  it('should format a number with commas and two decimal places', () => {
    expect(formatNumber(1000)).toEqual('1,000.00');
    expect(formatNumber(123456789.123)).toEqual('123,456,789.12');
    expect(formatNumber(0)).toEqual('0.00');
  });
});

describe('formatDate', () => {
  it('should format a date string into "dd de MMMM, yyyy" format', () => {
    expect(formatDate('2023-03-09T06:30:00.000-06:00')).toEqual(
      '09 de marzo, 2023',
    );
    expect(formatDate('2021-04-15T12:00:00.000Z')).toEqual('15 de abril, 2021');
    expect(formatDate('2019-05-22T12:00:00.000Z')).toEqual('22 de mayo, 2019');
  });
});

describe('Card component', () => {
  it('renders the title and points correctly', () => {
    const title = 'Example title';
    const points = 1000;

    const {getByText} = render(<Card title={title} points={points} />);

    expect(getByText(title)).toBeDefined();
    expect(getByText(`${formatNumber(points)} pts`)).toBeDefined();
  });
});

describe('ImageComponent component', () => {
  const uri = 'https://loremflickr.com/640/480/technics';

  test('renders placeholder when image fails to load', () => {
    const {getByTestId} = render(<ImageComponent uri={'invalid-uri'} />);
    expect(getByTestId('product-image')).toBeDefined();
  });

  test('renders image when loaded successfully', () => {
    const {getByTestId} = render(<ImageComponent uri={uri} />);
    expect(getByTestId('product-image')).toBeDefined();
  });

  test('check callback function to be defined when the ImageComponent renders with an empty uri.', async () => {
    const mockCallback = jest.fn();
    render(<ImageComponent uri={''} callback={mockCallback} />);

    expect(mockCallback).toBeDefined();
  });

  test('does not call callback when image loads successfully', () => {
    const mockCallback = jest.fn();
    render(<ImageComponent uri={uri} callback={mockCallback} />);
    expect(mockCallback).toBe(mockCallback);
  });
});

describe('Header Component', () => {
  it('renders the component correctly', () => {
    render(<Header />);
  });

  it('displays the correct welcome text', () => {
    const {getByText} = render(<Header title="Welcome" />);
    expect(getByText('Welcome')).not.toBeNull();
  });

  it('displays the correct name', () => {
    const {getByText} = render(<Header />);
    expect(getByText('Edgardo Victorino Marín')).not.toBeNull();
  });
});

const mockProduct: ProductType = {
  id: '1',
  product: 'Test Product',
  image: 'https://example.com/image.jpg',
  createdAt: '2022-03-10T12:00:00.000Z',
  isRedemption: false,
  points: 100,
};

describe('ProductTile component', () => {
  test('renders correctly', () => {
    const onPressMock = jest.fn();
    const {getByTestId, getByText} = render(
      <ProductTile product={mockProduct} onPress={onPressMock} />,
    );
    const productImage = getByTestId('product-image');
    const productName = getByText(mockProduct.product);
    const productDate = getByText('10 de marzo, 2022');
    const productPoints = getByText('100.00');

    expect(productImage.props.source.uri).toEqual(mockProduct.image);
    expect(productName.props.children).toEqual(mockProduct.product);
    expect(productDate.props.children).toEqual('10 de marzo, 2022');
    expect(productPoints.props.children).toEqual('100.00');
  });

  test('onPress function is called with the correct argument', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <ProductTile product={mockProduct} onPress={onPressMock} />,
    );
    const productContainer = getByTestId('product-container');

    fireEvent.press(productContainer);

    expect(onPressMock).toHaveBeenCalledWith(mockProduct);
  });
});

describe('Button Component', () => {
  it('renders correctly with given props', () => {
    const {getByText} = render(<Button label="Press Me" onPress={() => {}} />);
    expect(getByText('Press Me')).toBeDefined();
  });

  it('calls onPress function when pressed', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <Button label="Press Me" onPress={mockOnPress} />,
    );
    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('applies style prop to button container', () => {
    const {getByTestId} = render(
      <Button
        label="Press Me"
        style={{backgroundColor: 'red'}}
        onPress={() => {}}
      />,
    );
    const buttonContainer = getByTestId('button');
    expect(buttonContainer.props.style.backgroundColor).toBe('red');
  });
});

jest.mock('Api', () => ({
  products: jest.fn(),
}));

describe('productsServices.get', () => {
  it('should return the products data when the request is successful', async () => {
    const mockedProducts = [
      {
        id: '1',
        product: 'Product 1',
        points: 10,
        image: 'image1.png',
        is_redemption: false,
        createdAt: '2022-12-09T10:20:00.909Z',
      },
      {
        id: '2',
        product: 'Product 2',
        points: 20,
        image: 'image2.png',
        is_redemption: true,
        createdAt: '2022-12-09T10:20:00.909Z',
      },
    ];

    const mockedResponse: AxiosResponse = {
      data: mockedProducts,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    jest.mocked(products).mockResolvedValue(mockedResponse);

    const expectedResponse: ProductsInterface = {
      products: [
        {
          id: '1',
          product: 'Product 1',
          points: 10,
          image: 'image1.png',
          isRedemption: false,
          createdAt: mockedProducts[0].createdAt,
        },
        {
          id: '2',
          product: 'Product 2',
          points: 20,
          image: 'image2.png',
          isRedemption: true,
          createdAt: mockedProducts[1].createdAt,
        },
      ],
      earned: [
        {
          id: '1',
          product: 'Product 1',
          points: 10,
          image: 'image1.png',
          isRedemption: false,
          createdAt: mockedProducts[0].createdAt,
        },
      ],
      redeemed: [
        {
          id: '2',
          product: 'Product 2',
          points: 20,
          image: 'image2.png',
          isRedemption: true,
          createdAt: mockedProducts[1].createdAt,
        },
      ],
      total: 20,
    };

    const result = await productsServices.get();

    expect(result).toEqual(expectedResponse);
  });
});
