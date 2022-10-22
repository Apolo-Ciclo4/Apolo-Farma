//import logo from './logo.svg';
import Header from './components/layout/Header';
import './App.css';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import CuidadoFacial from './components/layout/CuidadoFacial';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Dermocosmeticos/cuidadofacial' element={<CuidadoFacial/>}/>
      </Routes>
      <br></br>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
