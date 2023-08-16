import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from './pages/Contact';
import CopyrightPolicy from "./pages/CopyrightPolicy";
import PageNotFound from './pages/PageNotFound';
import Team from "./pages/Team";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<PrivateRoute />} >
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<CopyrightPolicy />} />
        <Route path='/team' element={<Team />} />
        <Route path='/category' element={<Category />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes >
    </>
  );
}

export default App;
