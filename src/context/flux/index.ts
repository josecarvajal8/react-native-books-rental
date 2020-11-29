import { languageChange, sesionPersistance, wishListBooks } from "./actions/local";
import { booksFailure, booksSuccess, fetchRequest, loginFailure, loginSucces, suggestionsFailure, suggestionsSuccess } from "./actions/request";
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS, FETCH_DATA, FETCH_LOGIN_FAILURE, FETCH_LOGIN_SUCCESS, FETCH_SUGGESTIONS_FAILURE, FETCH_SUGGESTIONS_SUCCESS, LANGUAGE_CHANGE, LOGIN_PERSISTANCE, WISH_LIST_UPDATE } from "./types";

const reducers: any = {
    [FETCH_BOOKS_SUCCESS]: (state: any, payload: any) => booksSuccess(state, payload),
    [FETCH_BOOKS_FAILURE]: (state: any, payload: any) => booksFailure(state, payload),
    [FETCH_SUGGESTIONS_SUCCESS]: (state: any, payload: any) => suggestionsSuccess(state, payload),
    [FETCH_SUGGESTIONS_FAILURE]: (state: any, payload: any) => suggestionsFailure(state, payload),
    [FETCH_LOGIN_SUCCESS]: (state: any, payload: any) => loginSucces(state, payload),
    [FETCH_LOGIN_FAILURE]: (state: any, payload: any) => loginFailure(state, payload),
    [FETCH_DATA]: (state: any, payload: any) => fetchRequest(state, payload),
    [LOGIN_PERSISTANCE]: (state: any, payload: any) => sesionPersistance(state, payload),
    [LANGUAGE_CHANGE]: (state: any, payload: any) => languageChange(state, payload),
    [WISH_LIST_UPDATE]: (state: any, payload: any) => wishListBooks(state, payload),
    ['DEFAULT']: (state: any, payload: any) => state

}

export default function reducer(state: any, action: any) {
    const { type = 'DEFAULT', payload = null } = { ...action };
    return !!type ? reducers[type](state, payload) : reducers.DEFAULT(state);
}