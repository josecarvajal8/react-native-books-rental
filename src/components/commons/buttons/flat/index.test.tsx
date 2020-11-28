import React from 'react';
import { Text } from 'react-native-animatable';
import renderer from 'react-test-renderer';
import FlatButton from '.';
const mockProps = {
    children: () => <Text>{'hello'}</Text>,
    action: () => null
}
test('Render flatButton component correctly', () => {
    const flatButtonCmp = renderer.create(<FlatButton {...mockProps} />).toJSON();
    expect(flatButtonCmp).toMatchSnapshot();
});