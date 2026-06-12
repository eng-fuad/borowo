// import image from "./4.png" 
import { Link } from "react-router-dom";
import image from "./che.png" 
const HomePage =()=>{
    return(
        <>
        <div className="pages" >
            <div className="content">
                <h1>We bring high quality,<br />natural ingreidents.
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit Voluptas quo fuga molestias laborum amet consectetur adipisicing fuga molestias laborum amet consectetur elit nisi aliquam quos ad dolor quae optio.</p>
               <Link to="/project">
                 <button className="fresh">Buy Now</button>
               </Link>
            </div>
            <div className="images">
                <img src={image}/>
            </div>
        </div>
        </>
    )
}
export default HomePage;

