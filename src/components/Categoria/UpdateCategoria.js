import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ReadCategoria = () => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/categoria/${id}`);
        setCategoria(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategoria();
  }, [id]);

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Detalhes da Categoria</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{categoria.id}</td>
            <td>{categoria.descricao}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/categoria')}>Voltar</button>
    </div>
  );
};

export default ReadCategoria;
