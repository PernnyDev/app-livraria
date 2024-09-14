import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCategoria = () => {
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/categoria', { descricao });
      navigate('/categoria');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Adicionar Categoria</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">Descrição:</label>
          <input
            type="text"
            className="form-control"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição da categoria"
          />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/categoria')}>Voltar</button>
      </form>
    </div>
  );
};

export default AddCategoria;
