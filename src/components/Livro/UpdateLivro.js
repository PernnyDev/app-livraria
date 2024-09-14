import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateLivro = () => {
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [fk_editora, setFkEditora] = useState('');
  const [fk_categoria, setFkCategoria] = useState('');
  const [fk_autor, setFkAutor] = useState('');
  const [editoras, setEditoras] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [autores, setAutores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/livro/${id}`);
        setTitulo(res.data.titulo);
        setFkEditora(res.data.fk_editora);
        setFkCategoria(res.data.fk_categoria);
        setFkAutor(res.data.fk_autor);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchEditoras = async () => {
      try {
        const res = await axios.get('http://localhost:8081/editora');
        setEditoras(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchCategorias = async () => {
      try {
        const res = await axios.get('http://localhost:8081/categoria');
        setCategorias(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchAutores = async () => {
      try {
        const res = await axios.get('http://localhost:8081/autor');
        setAutores(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLivro();
    fetchEditoras();
    fetchCategorias();
    fetchAutores();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/livro/${id}`, { titulo, fk_editora, fk_categoria, fk_autor });
      navigate('/livro');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Editar Livro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título do livro"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fk_editora" className="form-label">Editora:</label>
          <select
            className="form-select"
            id="fk_editora"
            value={fk_editora}
            onChange={(e) => setFkEditora(e.target.value)}
          >
            <option value="">Selecione a Editora</option>
            {editoras.map(editora => (
              <option key={editora.id} value={editora.id}>{editora.descricao}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="fk_categoria" className="form-label">Categoria:</label>
          <select
            className="form-select"
            id="fk_categoria"
            value={fk_categoria}
            onChange={(e) => setFkCategoria(e.target.value)}
          >
            <option value="">Selecione a Categoria</option>
            {categorias.map(categoria => (
              <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="fk_autor" className="form-label">Autor:</label>
          <select
            className="form-select"
            id="fk_autor"
            value={fk_autor}
            onChange={(e) => setFkAutor(e.target.value)}
          >
            <option value="">Selecione o Autor</option>
            {autores.map(autor => (
              <option key={autor.id} value={autor.id}>{autor.nome}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/livro')}>Voltar</button>
      </form>
    </div>
  );
};

export default UpdateLivro;
