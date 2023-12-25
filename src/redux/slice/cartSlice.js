import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartAr: [],
        open: {
            isOpen: false,
            data: {}
        },
    },
    reducers: {
        setCartList: (state, payload) => {
            return {
                ...state,
                cartAr: [...payload.payload]
            }
        },
        setOpenCart: (state, payload) => {
            return {
                ...state,
                open:{
                    ...state.open,
                    data: payload.payload.data,
                    isOpen: payload.payload.isOpen,
                }
            }
        },
        byToCart: (state, payload) => {
            const isCart = state.cartAr.find((e) => e.id === payload.payload.id);
            if (!isCart) {
                return {
                    cartAr: [...state.cartAr, { ...payload.payload, qty: 1, total: payload.payload.price }]
                };
            } else {
                const cartNew =  cloneDeep(state.cartAr);
                const objIndex = cartNew.findIndex((obj) => obj.id === payload.payload.id);
                cartNew[objIndex].qty = cartNew[objIndex].qty + 1;
                cartNew[objIndex].total = cartNew[objIndex].price * cartNew[objIndex].qty;
                return {
                    ...state,
                    open:{
                        ...state.open,
                        isOpen: false,
                    },
                    cartAr: cartNew
                };
            }
        },
        plusToCart: (state, payload) => {
            const cartNew = cloneDeep(state.cartAr);
            const objIndex = cartNew.findIndex((obj) => obj.id === payload.payload);
            cartNew[objIndex].qty = cartNew[objIndex].qty + 1;
            cartNew[objIndex].total = cartNew[objIndex].price * cartNew[objIndex].qty;
            return {
                ...state,
                cartAr: cartNew
            };
        },
        minusToCart: (state, payload) => {
            const cartNew = cloneDeep(state.cartAr);
            const objIndex = cartNew.findIndex((obj) => obj.id === payload.payload);
            if (cartNew[objIndex].qty > 1) {
                cartNew[objIndex].qty = cartNew[objIndex].qty - 1;
                cartNew[objIndex].total = cartNew[objIndex].price * cartNew[objIndex].qty;
            }
            else{
                cartNew.splice(objIndex, 1);
            }
            return {
                ...state,
                cartAr: cartNew
            };
        },
        qtyCart: (state, payload) => {
            const cartNew = cloneDeep(state.cartAr);
            const objIndex = cartNew.findIndex((obj) => obj.id == payload.payload.id);
            if (payload.payload.qty >= 1) {
                cartNew[objIndex].qty = payload.payload.qty;
                cartNew[objIndex].total = cartNew[objIndex].price * cartNew[objIndex].qty;
            }
            
            return {
                ...state,
                cartAr: cartNew
            };
        },
        DeleteCart: (state, payload) => {
            const cartNew = cloneDeep(state.cartAr);
  
            const index = cartNew.findIndex((obj) => obj.id === payload.payload);

            if (index !== -1) {
                cartNew.splice(index, 1);
            }

            return {
                ...state,
                cartAr: cartNew
            };
        }
    }
});

export const { byToCart, DeleteCart, setCartList, plusToCart, minusToCart, qtyCart,setOpenCart } = cartSlice.actions;
export default cartSlice.reducer;
