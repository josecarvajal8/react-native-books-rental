import React from 'react';
import renderer from 'react-test-renderer';
import NavBarContain from '.';
const mockProps = {
    searchValue: '',
    onChangeSearchValue: () => null
}
test('Render booksList component correctly', () => {
    const bookListCmp = renderer.create(<NavBarContain  {...mockProps} />).toJSON();
    expect(bookListCmp).toMatchSnapshot();
})