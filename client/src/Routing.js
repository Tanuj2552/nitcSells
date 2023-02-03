import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from '../src/components/Error';
import Products from './components/Products/Products';

const Routing = () => {

    return(
      <Routes>
        {/* Home */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
       
        {/* Others */}
        <Route path='*' element={<Error />} />
        
      </Routes>
    )
  }

export default Routing;