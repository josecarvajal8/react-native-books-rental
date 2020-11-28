const sesionPersistance = (state: any, payload: any = []) => {
    return {
        ...state, user: payload, loading: false
    }
}
export { sesionPersistance };