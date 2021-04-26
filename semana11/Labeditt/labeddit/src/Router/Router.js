import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from '../Pages/Login/Login'

const Router = ()=>{
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>

            <Route exact path="/cadastrar">

            </Route>
            
            <Route exact path="/Feed">

            </Route>
            
            <Route exact path="/Post">

            </Route>
            
            <Route>
                
            </Route>
        
        </Switch>
    </BrowserRouter>
}
export default Router;