import { createContext } from 'react';


export const AuthContext = createContext();

function AppAuthContext(props) {
   
    return (
        <AuthContext.Provider
            value={{
            store
        }}>

        </AuthContext.Provider>
    )
}