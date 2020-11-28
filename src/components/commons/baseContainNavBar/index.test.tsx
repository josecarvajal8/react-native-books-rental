import React from 'react';
import renderer from 'react-test-renderer';
import BaseContainNavBar from '.';
const mockProps = {
    title: 'test',
    onBack: () => null
}
test('Render BaseContainNavBar component correctly', () => {
    const BaseContainNavBarCmp = renderer.create(<BaseContainNavBar {...mockProps} />).toJSON();
    expect(BaseContainNavBarCmp).toMatchSnapshot();
})