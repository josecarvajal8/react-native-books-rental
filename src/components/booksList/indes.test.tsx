import React from 'react';
import renderer from 'react-test-renderer';
import BookList from '.';

test('Render booksList component correctly', ()=> {
    const bookListCmp = renderer.create(<BookList navigation={null}/>).toJSON();
    expect(bookListCmp).toMatchSnapshot();
})