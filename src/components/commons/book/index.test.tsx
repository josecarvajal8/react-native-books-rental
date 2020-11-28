import React from 'react';
import renderer from 'react-test-renderer';
import Book from '.';
const mockProps = {
    author: 'John doe',
    title: 'The GitHub Journey',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
}
test('Render booksList component correctly', () => {
    const bookListCmp = renderer.create(<Book {...mockProps} />).toJSON();
    expect(bookListCmp).toMatchSnapshot();
})