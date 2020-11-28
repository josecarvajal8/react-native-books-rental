import { ConnectorManager } from "../../../../core/connector"

const fetchRequest = (state: any, payload: any) => {
    const { request = {}, dispatch = null } = { ...payload };
    const loading = true;
    ConnectorManager.generateRequest({ ...request }).then(res =>
        dispatch({ type: request.success, payload: res })
    ).catch(err => dispatch({ type: request.failure, payload: err }));
    return { ...state, loading };
}
const booksSuccess = (state: any, payload: any = []) => {
    return {
        ...state, books: payload, loading: false
    }
}
const booksFailure = (state: any, payload: any = []) => {
    return {
        ...state, error: payload, loading: false
    }
}
const suggestionsSuccess = (state: any, payload: any = []) => {
    return {
        ...state, suggestions: payload, loading: false
    }
}
const suggestionsFailure = (state: any, payload: any = []) => {
    return {
        ...state, suggestions: payload, loading: false
    }
}
const loginSucces = (state: any, payload: any) => {
    return {
        ...state, user: payload, loading: false
    }
}
const loginFailure = (state: any, payload: any) => {
    return {
        ...state, error: payload, loading: false
    }
}
export {
    fetchRequest,
    booksSuccess,
    booksFailure,
    suggestionsSuccess,
    suggestionsFailure,
    loginFailure,
    loginSucces
}