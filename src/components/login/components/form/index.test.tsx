import React from 'react';
import renderer from 'react-test-renderer';
import Form from '.';
const mockProps = {
    onLogin: () => null,
}
test('Render form component correctly', () => {
    const formCmp = renderer.create(<Form {...mockProps} />).toJSON();
    expect(formCmp).toMatchSnapshot();
});