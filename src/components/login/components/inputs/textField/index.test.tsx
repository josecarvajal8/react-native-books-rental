import React from 'react';
import renderer from 'react-test-renderer';
import TextField from '.';
const mockProps = {
    handleChange: () => null,
    handleBlur: () => null,
    handlerErrors: () => null,
    fieldId: 'test',
    label: 'test_field',
    values: {},
    disable: false
}
test('Render textField component correctly', () => {
    const textFieldCmp = renderer.create(<TextField {...mockProps} />).toJSON();
    expect(textFieldCmp).toMatchSnapshot();
});