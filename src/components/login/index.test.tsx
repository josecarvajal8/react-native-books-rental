import React from 'react';
import renderer from 'react-test-renderer';
import Login from '.';

test('Render login component correctly', () => {
    const loginCmp = renderer.create(<Login navigation={null} />).toJSON();
    expect(loginCmp).toMatchSnapshot();
});