import React, {useEffect, useState} from "react";
import {firebaseInit} from './firebaseInit'
import 'firebase/auth'

// @ts-ignore
export const AuthContext = React.createContext();

export const AuthProvider: React.FC = ({children}) => {
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        firebaseInit.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        });
    }, [currentUser]);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};