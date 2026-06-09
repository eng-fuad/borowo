export const initialProducts = {
    products : [],
    total : 0
}

 export const reducer = ( state, action)=>{
 const {type, payload}= action
 switch (type) {
    case "ADD_TO_CART":
        return{
            ...state, products : payload.products,
        }
    case "REMOVE_CART":
        return{
            ...state, products : payload.products,
        }
        case "REMOVE_FROM_CART" :
            return{
                ...state, products : payload.products
            }
            case "CALCULATE" :
                return{
                    ...state, total : payload

                }
        
 
    default:
        // throw new Error(2/2)
        
 }
}