"use client"
import { sidenav } from "@/reducers/sidenav";
import { user } from "@/reducers/user";
import { createContext, useReducer } from "react";

const initialState = {
    user: {},
    isSidenavOpen: false
}

// create context
const Context = createContext({} as any);

// combine reducer function
const combineReducers = (...reducers: any) => (state: any, action: any) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
    return state;
}

// context provider
const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(combineReducers(user, sidenav), initialState);
    const value = { state, dispatch };

    return <Context.Provider value={value}>{children}</Context.Provider>
};

export { Context, Provider };
