//import logo from './logo.svg';
import Header from './components/layout/Header';
import './App.css';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import CuidadoFacial from './components/layout/CuidadoFacial';
import Carrito from './components/carrito/Carrito';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProducsAdmin from './components/admin/ProductsAdmin';
import VentasProductos from './components/admin/VentasProductos';
import { CreateProduct } from './components/admin/CreateProduct';
import { ViewAdmin } from './components/admin/ViewAdmin';
import { UpdateProduct } from './components/admin/UpdateProduct';
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import { ProductsList } from './components/admin/ProductsList';
import { ProductDetails } from './components/products/ProductDetails';
import { useSelector } from 'react-redux';

function App() { 
  
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Dermocosmeticos/cuidadofacial' element={<CuidadoFacial />} />
          <Route path='/cart/details' element={<Carrito />} />
          <Route path='/admin/products' element={<ProducsAdmin />} />
          <Route path='/admin/sells' element={<VentasProductos />} />
          <Route path='/admin/newproduct' element={<CreateProduct />} />
          <Route path='/admin/view' element={<ViewAdmin />} />
          <Route path='/admin/update' element={<UpdateProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newuser" element={<Register />} />
          <Route path="/producto/nuevo" element={<CreateProduct />} />
          <Route path="/dashboard" element={<ViewAdmin />} />
          <Route path="/allProducts" element={<ProductsList />} />
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />
          <Route path="/producto/:id" element={<ProductDetails />} />
        </Routes>
        <br></br>
        <Footer>     

        </Footer>
         
      </div>
    </Router>
  );
}

export default App;
