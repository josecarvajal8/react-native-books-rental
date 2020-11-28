import React from 'react';
import renderer from 'react-test-renderer';
import List from '.';
const mockProps = {
    books: [],
    action: () => null
}
test('Render booksList component correctly', () => {
    const bookListCmp = renderer.create(<List {...mockProps} />).toJSON();
    expect(bookListCmp).toMatchSnapshot();
})