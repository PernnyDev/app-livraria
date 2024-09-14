import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ReadAutor = () => {
  const { id } = useParams();
  const [autor, setAutor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAutor = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/autor/${id}`);
        setAutor(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAutor();
  }, [id]);

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Detalhes do Autor</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data Cadastro</th>
            <th>Data Alteração</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{autor.id}</td>
            <td>{autor.nome}</td>
            <td>{autor.createdAt}</td>
            <td>{autor.updatedAt}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/autor')}>Voltar</button>
    </div>
  );
};

export default ReadAutor;
