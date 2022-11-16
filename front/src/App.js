//import logo from './logo.svg';
import Header from './components/layout/Header';
import './App.css';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import CuidadoFacial from './components/layout/CuidadoFacial';
import Carrito from './components/carrito/Carrito';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProducsAdmin from './components/admin/ProducsAdmin';
import VentasProductos from './components/admin/VentasProductos';
import { CreateProduct } from './components/admin/CreateProduct';
import { ViewAdmin } from './components/admin/ViewAdmin';
import { UpdateProduct } from './components/admin/UpdateProduct';
import { Login } from './components/user/Login';
import { useEffect } from 'react';
import store from "./store"
import { loadUser } from './actions/userAction';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

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
          <Route path='/login' element={<Login />} />
        </Routes>
        <br></br>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
