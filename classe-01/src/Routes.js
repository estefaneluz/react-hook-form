import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Pesquisar from './pages/pesquisar'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact />

            <Route path="/cadastro" component={Cadastro}/>

            <Route path="/pesquisar" component={Pesquisar}/>
        </Switch>
    );
}