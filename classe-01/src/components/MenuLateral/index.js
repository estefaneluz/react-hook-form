import './style.css';
import {Link} from 'react-router-dom'
import { urlBase } from '../../Routes';

export default function MenuLateral() {
  return (
    <aside className="menu-lateral">
      <ul>
				<Link to={urlBase}><li>Inicio</li></Link>
        <Link to={`${urlBase}/cadastro`}><li>Cadastrar</li></Link>
        <Link to={`${urlBase}/pesquisar`}><li>Pesquisar</li></Link>
        <Link to={`${urlBase}/editar`}><li>Editar</li></Link>
        <Link to={`${urlBase}/deletar`}><li>Deletar</li></Link>
      </ul>
    </aside>
  );
}
