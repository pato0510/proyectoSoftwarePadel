"use client";

import { useState } from 'react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
      <form>
        {/* Aquí van los inputs de email, contraseña y categoría para registro */}
        <button type="submit">{isLogin ? 'Iniciar sesión' : 'Registrarse'}</button>
      </form>
      <button onClick={toggleAuthMode}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
    </div>
  );
}

export default Auth;
