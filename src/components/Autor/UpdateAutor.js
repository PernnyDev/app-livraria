import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateAutor = () => {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAutor = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/autor/${id}`);
        setNome(res.data.nome);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAutor();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/autor/${id}`, { nome });
      navigate('/autor');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Editar Autor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do autor"
          />
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/autor')}>Voltar</button>
      </form>
    </div>
  );
};

export default UpdateAutor;
