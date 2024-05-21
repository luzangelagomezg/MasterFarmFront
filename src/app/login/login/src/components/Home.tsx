// src/components/home.tsx
import React from 'react';
import appFirebase from '../credenciales';  
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(appFirebase)

interface HomeProps {
  correoUsuario: string;
}

const Home: React.FC<HomeProps> = ({ correoUsuario }) => {
  return (
    <div>
      <h1 className='text-center'>Bienvenido, {correoUsuario} <button className='btn btn-primary' onClick={()=> signOut(auth)}>Log out</button></h1>
    </div>
  );
};

export default Home;
