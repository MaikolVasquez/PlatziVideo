import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Layout from '../containers/Layout';
import Login from '../containers/Login'
import Register from '../containers/Register'
import Player from '../containers/Player'




const App = () => { 


    return (

        <BrowserRouter>
            
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />                    
                    <Route exact path="/Register" component={Register} />    
                    <Route exact path="/Player/:id" component={Player} />                
                    <Route component={Home}/>
                </Switch>
            </Layout>
            
        </BrowserRouter>

    )


}

export default App;