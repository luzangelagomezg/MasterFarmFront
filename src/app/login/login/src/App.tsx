import { useState, useEffect } from 'react';
// importando los modulos de firebase
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import './App.css';

const auth = getAuth(appFirebase);

function App() {
  // Definir el tipo del estado usuario como User | null
  const [usuario, setUsuario] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {usuario ? <Home correoUsuario={usuario.email || ''} /> : <Login />}
    </div>
  );
}

export default App;
