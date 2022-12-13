import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const AuthContext = createContext();
const initalState = {
    accessToken: window.sessionStorage.getItem("accessToken"),
    sessionId: window.sessionStorage.getItem("sessionId"),
    user: JSON.parse(window.sessionStorage.getItem("user"))
}

function authReducer(state,action){
    switch(action.type){
        case "onRefresh":
        case "onLogin" :{
            const {accessToken,refreshToken} = action.payload;
            window.sessionStorage.setItem("accessToken",accessToken);
            window.sessionStorage.setItem("sessionId",refreshToken);
            window.sessionStorage.setItem("user",JSON.stringify(action.payload));
            return {...state,
                accessToken,
                sessionId: refreshToken,
                user: action.payload};
        }
        case "onLogout": {
            window.sessionStorage.clear();
            return {
                accessToken: null,
                sessionId: null,
                user: null
            };
        }
        default: 
            throw new Error("Invalid action type");
    }
}

export default function AuthContextProvider({children}) {
    const [authConfig,dispatch] = useReducer(authReducer,initalState);
    useEffect(()=>{global.authDisptch = dispatch;},[]);
    const authContext = useMemo(
        ()=> ({
            authConfig,
            dispatch}),
            [authConfig]
        );
    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
}
export const useAuthContext = () => useContext(AuthContext);