import React from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Pesquisar from "./pages/pesquisar";
import Deletar from "./pages/deletar";
import Editar from "./pages/editar";
import Inicio from "./pages/inicio";

export const urlBase = "/react-hook-form";

export default function Routes() {
  return (
    <Switch>
      <Route path={urlBase} exact component={Inicio} />
      <Route path={`${urlBase}/cadastro`} component={Cadastro} />
      <Route path={`${urlBase}/pesquisar`} component={Pesquisar} />
      <Route path={`${urlBase}/editar`} component={Editar} />
      <Route path={`${urlBase}/deletar`} component={Deletar} />
    </Switch>
  );
}
