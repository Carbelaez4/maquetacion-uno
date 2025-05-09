import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Acerca from './components/Acerca';


function WithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />

       
        <Route element={<WithNavbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca" element={<Acerca />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;