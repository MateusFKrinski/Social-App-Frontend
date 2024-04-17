import {createContext, useEffect, useState} from "react";
import {setCookie, parseCookies} from 'nookies'
import Router from 'next/router'
import {ReactNode} from "react";

import {recoverUserInformation, signInRequest} from "../services/auth";
import {api} from "@/services/api";

interface Props {
    children?: ReactNode;
}

type User = {
    id: string;
    email: string;
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: Props) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {
        const {'auth.token': token} = parseCookies()

        if (token) {
            recoverUserInformation(token).then(response => {
                const {id, email} = response
                setUser({id, email})
            })
        }
    }, [])

    async function signIn({email, password}: SignInData) {
        const {token, user} = await signInRequest({
            email,
            password,
        })

        setCookie(undefined, 'auth.token', token, {
            maxAge: 60 * 60 * 60,
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser(user)

        await Router.push('/');
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}