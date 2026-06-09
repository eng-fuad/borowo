import CartComponent from "../components/CartComponent";
import Payment from "../components/Payment";

const Cart =()=>{
    return (
        <div className="container">
            <CartComponent/>
            <Payment/>
        </div>
    )
}
export default Cart;