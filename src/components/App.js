import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';
import Redirect from './Redirect';
import redirects from '../data/redirects';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='*' element={<Redirect url="/" />} />
        {
          redirects.map((item) => (
            <Route key={item.page} path={item.page} element={<Redirect url={item.redirectTo} />} />
          ))
        }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
