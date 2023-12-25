import { createSlice } from "@reduxjs/toolkit";

const statusModal = createSlice({
    name: 'statusModal',
    initialState: {
        data: null,
        isOpen: false,
        isUser: false
    },
    reducers: {
        addToStatus: (state, payload) => {
            return {
                ...state,
                isOpen:payload.payload.isOpen,
                data: payload.payload.data,
            }
        },
        setIsUser: (state, payload) => {
            return {
                ...state,
                isUser:payload.payload
            }
        },
        removeStatus: (state, payload) => {
            return {
                ...state,
                isOpen:false,
                data: null,
            }
        }
    }
});

export const { addToStatus,removeStatus,setIsUser } = statusModal.actions;
export default statusModal.reducer;
