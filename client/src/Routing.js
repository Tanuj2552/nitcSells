import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Error from '../src/components/Error';
import Products from './components/Products/Products';
import Product from './components/Products/Product';
import Signup from './components/Signup/Signup';

const Routing = () => {

  return (
    <Routes>
      {/* Home */}
      <Route exact path='/' element={<Home />} />

      {/* Login */}
      <Route exact path='/login' element={<Login />} />

      {/* Signup */}
      <Route exact path='/signup' element={<Signup />} />

      <Route exact path='/products' element={<Products />} />
      <Route exact path='/products/:id' element={<Product />} />

      {/* Others */}
      <Route path='*' element={<Error />} />

    </Routes>
  )
}

export default Routing;