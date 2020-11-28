import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '.';

test('Render detail component correctly', ()=> {
    const detailCmp = renderer.create(<Detail navigation={null}/>).toJSON();
    expect(detailCmp).toMatchSnapshot();
})