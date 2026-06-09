import {createContext, useContext, useReducer } from "react";
import { initialProducts, reducer } from "./shopReducer";


const ShopContext = createContext(initialProducts);

export const ShopProvider =({children})=>{

    const [state, dispatch] = useReducer(reducer, initialProducts)

    const addToCart = (product) =>{
     const updateCart = state.products.concat(product);
     calculateTotal(updateCart)
     dispatch({type: "ADD_TO_CART",
        payload : {products : updateCart}
     })
    }
    const removeCart = (product) =>{
     const deleteCart = state.products.filter(p => p.id !== product.id)
     calculateTotal(deleteCart)
     dispatch({type: "REMOVE_CART",
        payload : {products : deleteCart}
     })
    }
    const removeFromCart = (product) =>{
     const deleteFROM = state.products.filter(pro => pro.id !== product.id)
     calculateTotal(deleteFROM)
     dispatch({type: "REMOVE_FROM_CART",
        payload : {products : deleteFROM}
     })
    }

    const calculateTotal =(products)=>{
        let total = 0;
        products.forEach(product =>{
            total += product.price;
        });

        dispatch({type : "CALCULATE", 
            payload : total
        })
    }

    const values = {
        products : state.products,
        total : state.total,
        addToCart,
        removeCart,
        removeFromCart
    }

    return <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider> 
}

const useShop =()=>{
     const context = useContext(ShopContext);
     if (context === undefined) {
        throw new Error("Reudecr most use inside the shopContext")
     }
     return context;
}
export default useShop;