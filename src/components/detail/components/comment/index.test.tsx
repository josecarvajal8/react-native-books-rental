import React from 'react';
import renderer from 'react-test-renderer';
import Comment from '.';
const mockProps = {
    userName: 'testing',
    commentText: 'blablabla'
}
test('Render comment component correctly', () => {
    const commentCmp = renderer.create(<Comment {...mockProps} />).toJSON();
    expect(commentCmp).toMatchSnapshot();
});