
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer';
const App =()=>{
    return(
        <div className='blog'>
        <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <Footer/>
     </div>
    )
}
export default App