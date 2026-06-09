import { useEffect, useState } from "react";
import useShop from "../ShopContext"

const Product =({product})=>{
  const {addToCart, removeCart ,products} = useShop();
  const [isIncart, setIsIncart] = useState(false);
  useEffect(()=>{
     const isCart = products.filter(pro => pro.id == product.id)
    if (isCart.length > 0) {
      setIsIncart(true)
    }else{
      setIsIncart(false)
    }
  },[products])
  const handleClick =()=>{
   if (isIncart) {
    removeCart(product);
   }else{
    addToCart(product);
   }
  }
    return(
       <div
       className="card"
       style={{minHeight: "100%",
         background : `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
         url(${product.urlImage})`,
         backgroundPosition : "center",
         backgroundRepeat : "no-repeat",
         backgroundSize : "cover"
       }}
       >
       <div className="info">
          <span>{product.name}</span>
        <span>${product.price}</span>
       </div>
       <button className={`btn ${isIncart ? "btn-secondary" : " btn-primary"}`} onClick={handleClick}>{isIncart ? "-" : "+"}</button>
       </div>
    )
}
export default Product;
