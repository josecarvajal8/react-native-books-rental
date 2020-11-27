
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS } from "../../context/flux/types"

export const FETCH_BOOKS = {
        url: 'https://my-json-server.typicode.com/josecarvajal8/fake-rest/books',
        method: 'GET',
        headers: { 'token': 'token' },
        success: FETCH_BOOKS_SUCCESS,
        failure: FETCH_BOOKS_FAILURE
}