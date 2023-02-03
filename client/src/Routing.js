import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from '../src/components/Error';

const Routing = () => {

    return(
      <Routes>
        {/* Home */}
        <Route exact path='/' element={<Home />} />
        
       

        {/* Others */}
        <Route path='*' element={<Error />} />
        
      </Routes>
    )
  }

export default Routing;