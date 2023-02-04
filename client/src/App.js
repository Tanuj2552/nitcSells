import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToTop from './ScrollToTop';
import Routing from './Routing.js';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routing />
    </>
  );
}

export default App;
