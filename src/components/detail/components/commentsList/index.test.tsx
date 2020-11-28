import React from 'react';
import renderer from 'react-test-renderer';
import CommentsList from '.';
const mockProps = {
    data: []
}
test('Render commentsList component correctly', () => {
    const commentsListCmp = renderer.create(<CommentsList  {...mockProps} />).toJSON();
    expect(commentsListCmp).toMatchSnapshot();
});