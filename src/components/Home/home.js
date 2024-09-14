import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Bem-vindo à Livraria</h1>
        <nav>
          <ul>
            <li><Link to="/editora">Editoras</Link></li>
            <li><Link to="/autor">Autores</Link></li>
            <li><Link to="/livro">Livros</Link></li>
            <li><Link to="/categoria">Categorias</Link></li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Home;