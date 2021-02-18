import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logOutRequest } from '../actions'
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/Gravatar'
import classNames from 'classnames'
import '../assets/styles/components/Header.scss';

const Header = (props) => {
const { user, isRegister, isLogin } =props;
const hasUser = Object.keys(user).length > 0

const handelLogOut = () => { 
  props.logOutRequest({})
}

const headerClass = classNames('header',{isLogin, isRegister,})

return(
  <header className={headerClass}>
    <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video"/>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {
          hasUser ? 
        <img src={gravatar(user.email)} alt={user.email}/>
          :
        <img src={userIcon} alt="" />
        }
        {
        hasUser ? 
        <p>{user.email}</p>
          :
          <p>Perfil</p>
        }
        
      </div>
      <ul>
        {
          hasUser ? 
        <li><a href="/">{user.name}</a></li>          
            :
        <li><Link to="/Register">Registrate</Link></li> 
        }

{
          hasUser ? 
          <li><a to="/Login" onClick={handelLogOut}>Cerrar Sesión</a></li>
            :
          <li><Link to="/Login">Iniciar Sesión</Link></li>
          }


      </ul>
    </div>
  </header>
)};


const mapStateToProps = state => {

  return {
    user : state.user
  };

};


const mapDispatchToProps = { 
  logOutRequest
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);
