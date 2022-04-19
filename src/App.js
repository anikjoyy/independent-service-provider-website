import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login/Login';
import ServiceDetails from './Components/Home/ServiceDetails/ServiceDetails';
import NotFound from './Components/Shared/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import Register from './Components/Login/Register/Register';
import CheckOut from './Components/CheckOut/CheckOut';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route
          path='/service/:serviceId'
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route
          path='/checkout'
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
