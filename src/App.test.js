import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListEditora from './components/Editora/ListEditora';
import AddEditora from './components/Editora/AddEditora';
import UpdateEditora from './components/Editora/UpdateEditora';
import ReadEditora from './components/Editora/ReadEditora';
import ListAutor from './components/Autor/ListAutor';
import AddAutor from './components/Autor/AddAutor';
import UpdateAutor from './components/Autor/UpdateAutor';
import ReadAutor from './components/Autor/ReadAutor';
import ListLivro from './components/Livro/ListLivro';
import AddLivro from './components/Livro/AddLivro';
import UpdateLivro from './components/Livro/UpdateLivro';
import ReadLivro from './components/Livro/ReadLivro';
import ListCategoria from './components/Categoria/ListCategoria';
import AddCategoria from './components/Categoria/AddCategoria';
import UpdateCategoria from './components/Categoria/UpdateCategoria';
import ReadCategoria from './components/Categoria/ReadCategoria';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/editora">Editoras</Link></li>
          <li><Link to="/autor">Autores</Link></li>
          <li><Link to="/livro">Livros</Link></li>
          <li><Link to="/categoria">Categorias</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editora" element={<ListEditora />} />
        <Route path="/addEditora" element={<AddEditora />} />
        <Route path="/updateEditora/:id" element={<UpdateEditora />} />
        <Route path="/readEditora/:id" element={<ReadEditora />} />
        <Route path="/autor" element={<ListAutor />} />
        <Route path="/addAutor" element={<AddAutor />} />
        <Route path="/updateAutor/:id" element={<UpdateAutor />} />
        <Route path="/readAutor/:id" element={<ReadAutor />} />
        <Route path="/livro" element={<ListLivro />} />
        <Route path="/addLivro" element={<AddLivro />} />
        <Route path="/updateLivro/:id" element={<UpdateLivro />} />
        <Route path="/readLivro/:id" element={<ReadLivro />} />
        <Route path="/categoria" element={<ListCategoria />} />
        <Route path="/addCategoria" element={<AddCategoria />} />
        <Route path="/updateCategoria/:id" element={<UpdateCategoria />} />
        <Route path="/readCategoria/:id" element={<ReadCategoria />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Bem-vindo à Livraria</h1>;
}

export default App;
