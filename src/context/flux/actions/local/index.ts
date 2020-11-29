const sesionPersistance = (state: any, payload: any = []) => {
    return {
        ...state, user: payload, loading: false
    }
}
const languageChange = (state:any, payload:any = []) => {
    return {
        ...state, locale: payload, loading: false
    }
}
export { sesionPersistance, languageChange };