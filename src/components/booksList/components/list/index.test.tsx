import React from 'react';
import renderer from 'react-test-renderer';
import List from '.';
const mockProps = {
    books: [],
    action: () => null
}
test('Render List component correctly', () => {
    const listCmp = renderer.create(<List {...mockProps} />).toJSON();
    expect(listCmp).toMatchSnapshot();
})