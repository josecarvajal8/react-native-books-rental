import React from 'react';
import renderer from 'react-test-renderer';
import PickerField from '.';
const mockProps = {
    setFieldValue: () => null,
    fieldId: 'test',
    label: 'test_field',
    value: '',
    options: []
}
test('Render pickerField component correctly', () => {
    const pickerFieldCmp = renderer.create(<PickerField {...mockProps} />).toJSON();
    expect(pickerFieldCmp).toMatchSnapshot();
});