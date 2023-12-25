import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import favoriteSlice from "./slice/favoriteSlice";
import statusModal from "./slice/statusModal";
import authSlice from "./slice/authSlice";


const reducer = combineReducers({
    cart: cartSlice,
    favorite: favoriteSlice,
    statusModal:statusModal,
    auth:authSlice
})
const store = configureStore({
    reducer,
}) 
export default store