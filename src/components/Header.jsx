import { Link } from "react-router-dom"
import useShop from "../ShopContext";
const Header =()=>{
   const {products} =useShop();
return(
    <div className="header-side">
        <Link className="react" to="/">Reactify</Link>
        {/* freshBite */}
        <div className="header-items">
            <Link to="/">Home</Link>
            <Link to="/project">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
        <Link to="/cart">
        <span className="cart">{products.length}</span>
        </Link>
    </div>
)
}
export default Header;