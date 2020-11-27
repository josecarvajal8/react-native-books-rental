
import { FETCH_SUGGESTIONS_SUCCESS, FETCH_SUGGESTIONS_FAILURE } from "../../core/context/flux/types"

export const FETCH_SUGGESTIONS = (genre: string) => {
    return {
        url: `https://my-json-server.typicode.com/josecarvajal8/fake-rest/books?genre=${genre}`,
        method: 'GET',
        headers: { 'token': 'token' },
        success: FETCH_SUGGESTIONS_SUCCESS,
        failure: FETCH_SUGGESTIONS_FAILURE
    }
}