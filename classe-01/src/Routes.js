import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>

            </Route>

            <Route path="/cadastro">
                <Cadastro/>
            </Route>
        </Switch>
    );
}