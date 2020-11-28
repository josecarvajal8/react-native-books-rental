import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_SUCCESS } from "../../context/flux/types"

export const FETCH_LOGIN = (payload: any) => {
    return {
        url: 'https://my-json-server.typicode.com/josecarvajal8/fake-rest/sign_in',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        success: FETCH_LOGIN_SUCCESS,
        failure: FETCH_LOGIN_FAILURE
    }
}