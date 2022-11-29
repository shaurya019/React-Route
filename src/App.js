import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Nomatch from './components/Nomatch'
import Products from './components/Products'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import Admin from './components/Admin'
import UserDetails from './components/UserDetails'
import Profile from './components/Profile'
import OrderSummary from './components/OrderSummary'
import { RequireAuth } from './components/RequireAuth'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/About' element={<About />} exact />
      <Route path='/Order' element={<OrderSummary />} exact />
      <Route path='/Products' element={<Products />} exact >
        {/* parent route per render karana ha toh yeh karo  */}
        <Route index element={<FeaturedProducts/>} />
      <Route path='featured' element={<FeaturedProducts />}  />
      <Route path='new' element={<NewProducts />}  />
      </Route>
      <Route path='/login' element={<Login />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      <Route path='users' element={<Users />} exact />
      <Route path='users/:userId' element={<UserDetails />} exact />
      <Route path='users/admin' element={<Admin />} exact />
      <Route path='*' element={<Nomatch />} exact />
      </Routes>
    </>
  );
}

export default App;
