import React from 'react';
import { Text } from 'react-native-animatable';
import renderer from 'react-test-renderer';
import NavBar from '.';
const mockProps = {
    children: () => <Text>{'hello'}</Text>,
}
test('Render navBar component correctly', () => {
    const navBarCmp = renderer.create(<NavBar {...mockProps} />).toJSON();
    expect(navBarCmp).toMatchSnapshot();
});