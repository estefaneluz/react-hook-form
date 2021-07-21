import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Pesquisar from './pages/pesquisar'
import Deletar from './pages/deletar'
import Editar from './pages/editar'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact />

            <Route path="/cadastro" component={Cadastro}/>

            <Route path="/pesquisar" component={Pesquisar}/>

            <Route path="/editar" component={Editar}/>

            <Route path="/deletar" component={Deletar}/>
        </Switch>
    );
}