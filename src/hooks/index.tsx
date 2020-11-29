import { useContext, useState } from 'react';
import { DispatchContext, StateContext } from '../context';

export const useAppContext = () => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    return [state, dispatch];
};
export const useForceUpdate = () => {
    const [, setValue] = useState(0); // integer state
    return () => setValue(value => ++value);
}
