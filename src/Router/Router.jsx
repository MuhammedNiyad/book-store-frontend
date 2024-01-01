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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
