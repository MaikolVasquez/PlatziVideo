import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Layout from '../containers/Layout';
import Login from '../containers/Login'
import Register from '../containers/Register'




const App = () => { 


    return (

        <BrowserRouter>
            
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                </Layout>
            </Switch>
            
        </BrowserRouter>

    )


}

export default App;