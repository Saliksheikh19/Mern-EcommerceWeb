import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state?.user?.currentUser);
  console.log(user)
 return ( 
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={ <Home/>} />
    <Route path='/products/:category' element={ <ProductList/>} />
    <Route path='/product/:id' element={<Product/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/login' element={!user? <Login/> :  <Home/>} />
    <Route path='/success'  element={<Success/>} /> 
    <Route path='/register' element={!user ? <Register/> : <Home/>} />
  </Routes>
  </BrowserRouter>
)

};

export default App;