import React from 'react';
import renderer from 'react-test-renderer';
import NavBarContain from '.';
const mockProps = {
    searchValue: '',
    onChangeSearchValue: () => null
}
test('Render NavBarContain component correctly', () => {
    const NavBarContainCmp = renderer.create(<NavBarContain  {...mockProps} />).toJSON();
    expect(NavBarContainCmp).toMatchSnapshot();
})