import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Import pages...!
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound/NotFound';

// Import Components...!
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Book from '../Pages/Book';
import Shope from '../Pages/Shope/Shope';
import SignIn from '../Pages/Sign_In/SignIn';
import Register from '../Pages/Register/Register';
import Cart from '../Pages/Cart';
import About from '../Pages/About';
import Pages from '../Pages/Pages';
import Article from '../Pages/Article';
import Contact from '../Pages/Contact';


export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/book/:id' element={<Book />} />
        <Route path='/shope' element={<Shope />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/articles' element={<Article />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
