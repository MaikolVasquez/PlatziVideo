import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'



const App = () => { 


    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/Login" component={Login} />

                <Route exact path="/Register" component={Register} />
            </Switch>
        </BrowserRouter>

    )


}

export default App;