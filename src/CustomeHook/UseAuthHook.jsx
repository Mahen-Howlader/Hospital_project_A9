import { useContext } from 'react';
import { ProviderContext } from '../ContextApi/AuthProvider';

function UseAuthHook() {
    const all = useContext(ProviderContext)
    return all;
}

export default UseAuthHook;
