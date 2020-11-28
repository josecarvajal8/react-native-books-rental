import React from 'react';
import { Text } from 'react-native-animatable';
import renderer from 'react-test-renderer';
import RaisedButton from '.';
const mockProps = {
    children: () => <Text>{'hello'}</Text>,
    action: () => null
}
test('Render raisedButton component correctly', () => {
    const raisedButtonCmp = renderer.create(<RaisedButton {...mockProps} />).toJSON();
    expect(raisedButtonCmp).toMatchSnapshot();
});