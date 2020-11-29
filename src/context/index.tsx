import React, { createContext, useReducer } from 'react';
import reducer from './flux';
export const StateContext = createContext({});
export const DispatchContext = createContext({})
interface IProvider {
    children: React.ReactNode
}
const Provider = ({ children }: IProvider) => {
    const intialState = { loading: false, books: [], suggestions: [], error: null, user: null, locale: 'en' };
    const [state, dispatch] = useReducer(reducer, intialState);
    return (< DispatchContext.Provider value={dispatch} >
        <StateContext.Provider value={state}>
            {children}
        </StateContext.Provider>
    </DispatchContext.Provider >)
}
export default Provider;