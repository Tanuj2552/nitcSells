import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from '../src/components/Error';
import Products from './components/Products/Products';
import Product from './components/Products/Product';

const Routing = () => {

    return(
      <Routes>
        {/* Home */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<Product />} />
       
        {/* Others */}
        <Route path='*' element={<Error />} />
        
      </Routes>
    )
  }

export default Routing;