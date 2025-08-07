
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Header from './components/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Cart from './components/Cart';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path="/products" >
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
