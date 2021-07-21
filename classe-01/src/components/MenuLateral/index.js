import './style.css';
import {Link} from 'react-router-dom'

export default function MenuLateral() {
  return (
    <aside className="menu-lateral">
      <ul>
				<Link to="/"><li>Inicio</li></Link>
        <Link to="/cadastro"><li>Cadastrar</li></Link>
        <Link to="/pesquisar"><li>Pesquisar</li></Link>
        <Link to="/editar"><li>Editar</li></Link>
        <Link to="/deletar"><li>Deletar</li></Link>
      </ul>
    </aside>
  );
}
