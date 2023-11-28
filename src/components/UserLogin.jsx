import "../styles/userlogin.css"
import { useState } from "react";
import { FaGoogle } from 'react-icons/fa';

const UserLogin = (onUserLogin) => {
  const [user, setUser] = useState({
    email: "",
    key:"",
  });

  const handleChange = (e) => {
  setUser((prev)=> ({...prev, [e.target.name]: e.target.value}));
  }; 

  return (
    
    <div className="form-container">
    
      <form onChange={handleChange} className='user-container'>
        <label htmlFor='email'>Email</label>
        <input type="text" name="email" placeholder='Ingrese su email'onChange={handleChange} required/>
      <br />
        <label htmlFor='key'>Contraseña</label>
        <input type="password" name="key" placeholder='Ingrese su contraseña' onChange={handleChange} required/>
      
      <button type="submit" onClick={onUserLogin}>Iniciar sesión </button>
      <button type="submit" className="login-google">Continuar con Google <FaGoogle size={15} /> </button>

      </form>
    </div>
  )
}

export default UserLogin;