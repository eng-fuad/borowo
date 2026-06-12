import CartComponent from "../components/CartComponent";
import Payment from "../components/Payment";
import useShop from "../ShopContext";

const Cart =()=>{
    const {products}=useShop();
    if (products.length <= 0) return <h1>Cart is Empty</h1>
    return (
        <div className="container">
            <CartComponent/>
            <Payment/>
        </div>
    )
}
export default Cart;