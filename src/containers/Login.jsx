import React , { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/Login.scss'

const Login = (props) => {

 
    const [formInfo, setFormInfo] = useState({email:''})

    const setInfo = (event) =>{
      setFormInfo({
        ...formInfo,
        [event.target.name]: event.target.value
      })
    }
 
  const handelSubmit = event => {
    event.preventDefault()
    props.loginRequest(formInfo)
    props.history.push("/")
  }


    return (

        <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handelSubmit}>
            <input className="input" type="text" placeholder="Correo" name="email" onChange={setInfo}/>
            <input className="input" type="password" placeholder="Contraseña" name="password" onChange={setInfo}/>
            <button className="button" type="submit">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div><img src={googleIcon} /> Inicia sesión con Google</div>
            <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
          </section>
          <p className="login__container--register">No tienes ninguna cuenta <Link to="/Register">Regístrate</Link></p>
        </section>
      </section>
    )


}


const mapDispatchToProps={
  loginRequest,
}

export default connect(null,mapDispatchToProps)(Login);