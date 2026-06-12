
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Project from './pages/Project';
const App =()=>{
    return(
        <div className='blog'>
        <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <Footer/>
     </div>
    )
}
export default App