import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Feed from '../Pages/Feed/Feed'
import Login from '../Pages/Login/Login'
import Post from '../Pages/Post/Post'
import SingUp from '../Pages/SingUp/SingUp'
import Erro404 from '../Assets/404.gif'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>

                <Route exact path="/cadastrar">
                    <SingUp />
                </Route>

                <Route exact path="/Feed">
                    <Feed />
                </Route>

                <Route exact path="/Post">
                    <Post />
                </Route>

                <Route>
                   <img src={Erro404} />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router;