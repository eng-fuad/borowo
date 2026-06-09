import { useState } from "react";

const Payment = ()=>{
    const intialPayment ={
      zaad : false,
      sahal : false,
      evc : false,
    }
    const [payment, setPayment] = useState(intialPayment);

    return(
        <div className="payment-carts">
            <h2>Pay With</h2>
            <div className={`payment-cart ${payment.zaad && "selected"}`} 
            onClick={()=> setPayment({...intialPayment, zaad : true})}>
                <span>Zaad Service</span>
            </div>
            <div className={`payment-cart ${payment.sahal && "selected"}`}  
            onClick={()=> setPayment({...intialPayment, sahal : true})}>
                <span>Sahal Service</span>
            </div>
            <div className={`payment-cart ${payment.evc && "selected"}`}
            onClick={()=> setPayment({...intialPayment, evc : true})}>
                <span>Evc Plus</span>
            </div>
            <form>
                <input className="control" type="number" placeholder="2526......" />
                <button className="submit">Proceed</button>
            </form>
        </div>
    )
}
export default Payment;