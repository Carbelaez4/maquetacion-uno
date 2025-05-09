import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  // Estados para alternar entre Login y Registro
  const [isLogin, setIsLogin] = useState(true);

  // Campos para login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Campos para registro
  const [name, setName] = useState('');
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home'); // Login exitoso
  };

  const registrarUsuario = () => {
    console.log('Usuario registrado:', { name, newUser, newPassword, email });
    setIsLogin(true); // Regresa a Login después del registro
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: '300px'
        }}
      >
        {isLogin ? (
          <>
            <h1 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>Iniciar Sesión</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
              ¿No tienes cuenta?{' '}
              <span style={linkStyle} onClick={() => setIsLogin(false)}>Regístrate</span>
            </p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Regístrate</h1>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Usuario"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
            <button onClick={registrarUsuario} style={buttonStyle}>Registrarse</button>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
              ¿Ya tienes una cuenta?{' '}
              <span style={linkStyle} onClick={() => setIsLogin(true)}>Inicia sesión</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// Estilos comunes
const inputStyle = {
  padding: '0.5rem',
  marginBottom: '1rem',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const buttonStyle = {
  padding: '0.5rem',
  width: '100%',
  background: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const linkStyle = {
  color: '#007BFF',
  cursor: 'pointer',
  textDecoration: 'underline'
};