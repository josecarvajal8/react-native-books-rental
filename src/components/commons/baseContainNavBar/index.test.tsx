import React from 'react';
import renderer from 'react-test-renderer';
import BaseContainNavBar from '.';
const mockProps = {
    title: 'test',
    onBack: () => null
}
test('Render booksList component correctly', () => {
    const bookListCmp = renderer.create(<BaseContainNavBar {...mockProps} />).toJSON();
    expect(bookListCmp).toMatchSnapshot();
})