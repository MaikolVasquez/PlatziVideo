import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import '../assets/styles/Register.scss'


const Register = () => {

  const [form, setValue] = useState({
    name : '',
    email : '',
    password : ''
  })


  const handleInput = event => {    
    setValue(
      {        
        ...form,
        [event.target.name]:event.target.value
      }
    )
  }


  const handelSubmit = event => {
    event.preventDefault()
    console.log(form)
  }

    return(
        <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handelSubmit}>
            <input className="input" type="text" placeholder="Nombre" name="name" onChange={handleInput}/>
            <input className="input" type="text" placeholder="Correo" name="email"onChange={handleInput}/>
            <input className="input" type="password" placeholder="Contraseña" name="password" onChange={handleInput}/>
            <button className="button" type="submit">Registrarme</button>
          </form>
          <Link to="/Login">Iniciar sesión</Link>
        </section>
      </section>

    )

}

export default Register;