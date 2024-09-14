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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Livraria</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/editora">Editoras</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/autor">Autores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/livro">Livros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categoria">Categorias</Link>
              </li>
            </ul>
          </div>
        </div>
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
  return (
    <div className="container">
      <h1 className="w-100 d-flex justify-content-center p-3">Bem-vindo à Livraria</h1>
      <nav className="d-flex justify-content-center">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/editora" className="nav-link btn btn-primary my-2">Editoras</Link>
          </li>
          <li className="nav-item">
            <Link to="/autor" className="nav-link btn btn-primary my-2">Autores</Link>
          </li>
          <li className="nav-item">
            <Link to="/livro" className="nav-link btn btn-primary my-2">Livros</Link>
          </li>
          <li className="nav-item">
            <Link to="/categoria" className="nav-link btn btn-primary my-2">Categorias</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
