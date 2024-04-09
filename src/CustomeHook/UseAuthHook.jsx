import React, { useContext } from 'react';
import { ProviderContext } from '../ContextApi/AuthProvider';

function UseAuthHook(props) {
    const all = useContext(ProviderContext)
    return all;
}

export default UseAuthHook;
