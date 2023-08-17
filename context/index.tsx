"use client"
import { sidenav } from "@/reducers/sidenav";
import { user } from "@/reducers/user";
import { createContext, useReducer } from "react";

const initialState = {
    user: {},
    isSidenavOpen: true
}

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
    return state;
}

// context provider
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(combineReducers(user, sidenav), initialState);
    const value = { state, dispatch };

    return <Context.Provider value={value}>{children}</Context.Provider>
};

export { Context, Provider };
