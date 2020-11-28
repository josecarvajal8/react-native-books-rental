import React from 'react';
import renderer from 'react-test-renderer';
import Book from '.';
const mockProps = {
    author: 'John doe',
    title: 'The GitHub Journey',
    img: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
}
test('Render Book component correctly', () => {
    const BookCmp = renderer.create(<Book {...mockProps} />).toJSON();
    expect(BookCmp).toMatchSnapshot();
});