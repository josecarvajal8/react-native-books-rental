import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from '.';
const mockProps = {
    onChangeValue: () => null,
    fieldId: 'test',
    label: 'test_field',
    value: false
}
test('Render checkBox component correctly', () => {
    const checkBoxCmp = renderer.create(<CheckBox {...mockProps} />).toJSON();
    expect(checkBoxCmp).toMatchSnapshot();
});