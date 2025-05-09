import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const buttonStyle = {
    display: 'block',
    padding: '10px 15px',
    margin: '8px 0',
    background: '#555',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    textAlign: 'left'
  };

  return (
    <nav style={{
      width: '200px',
      height: '100vh',
      background: '#333',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed'
    }}>
      
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
        Home
      </div>

    
      <Link to="/servicios" style={buttonStyle}>Servicios</Link>
      <Link to="/contacto" style={buttonStyle}>Contacto</Link>
      <Link to="/acerca" style={buttonStyle}>Acerca</Link>
      <Link to="/registro" style={buttonStyle}>Registro</Link>

     
      <button
        onClick={handleLogout}
        style={{ ...buttonStyle, background: '#d9534f' }}
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}