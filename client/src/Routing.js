import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Error from '../src/components/Error';

const Routing = () => {

    return(
      <Routes>
        {/* Home */}
        <Route exact path='/' element={<Home />} />
        
       {/* Login */}
       <Route exact path='/login' element={<Login /> } />

        {/* Others */}
        <Route path='*' element={<Error />} />
        
      </Routes>
    )
  }

export default Routing;