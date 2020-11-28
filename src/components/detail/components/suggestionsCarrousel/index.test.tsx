import React from 'react';
import renderer from 'react-test-renderer';
import SuggestionsCarrousel from '.';
const mockProps = {
    data: [],
    onDetailSuggest: () => null
}
test('Render commentsList component correctly', () => {
    const commentsListCmp = renderer.create(<SuggestionsCarrousel {...mockProps} />).toJSON();
    expect(commentsListCmp).toMatchSnapshot();
});