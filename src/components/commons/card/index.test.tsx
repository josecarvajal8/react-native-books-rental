import React from 'react';
import { Text } from 'react-native-animatable';
import renderer from 'react-test-renderer';
import Card from '.';
const mockProps = {
    children: () => <Text>{'hello'}</Text>,
    action: () => null
}
test('Render card component correctly', () => {
    const cardCmp = renderer.create(<Card {...mockProps} />).toJSON();
    expect(cardCmp).toMatchSnapshot();
});