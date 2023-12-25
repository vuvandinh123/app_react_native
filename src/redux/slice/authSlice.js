import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: ""
    },
    reducers: {
        
        setToken: (state, payload) => {
            return {
                ...state,
                token:payload.payload
            }
        },
        setUser: (state, payload) => {
            return {
                ...state,
                user:payload.payload
            }
        },
        removeToken: (state, payload) => {
            return {
                ...state,
                token:"",
                user: null,
            }
        }
    }
});

export const { setToken,removeToken,setUser } = authSlice.actions;
export default authSlice.reducer;
