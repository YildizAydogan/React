import { types } from "../types"



export const bookReducer= (state= bookInitialState, action) =>{
    if (action.type===types.EKLE) {
        return{
            ...state,
            cart: state.cart.find((cartItem) => cartItem.id===action.payload.id)
            ? state.cart.map((cartItem) =>
            cartItem.id===action.payload.id? 
            {...cartItem,count:cartItem.count + 1 }:cartItem):
            [ 
                ...state.cart,{...action.payload,count}
            ],


        }
    }




}