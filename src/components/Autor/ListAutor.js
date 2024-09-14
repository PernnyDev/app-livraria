import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ListAutor = () => {
  const [autores, setAutores] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAutorId, setSelectedAutorId] = useState(null);

  useEffect(() => {
    const fetchAutores = async () => {
      try {
        const res = await axios.get('http://localhost:8081/autor');
        setAutores(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAutores();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8081/autor/${selectedAutorId}`);
      setAutores(autores.filter(autor => autor.id !== selectedAutorId));
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Listando Autores</h2>
      <Link to="/addAutor" className="btn btn-success mb-3">Adicionar Autor</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data Cadastro</th>
            <th>Data Alteração</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {autores.map(autor => (
            <tr key={autor.id}>
              <td>{autor.id}</td>
              <td>{autor.nome}</td>
              <td>{autor.createdAt}</td>
              <td>{autor.updatedAt}</td>
              <td>
                <Link to={`/readAutor/${autor.id}`} className="btn btn-success mx-2">Ler</Link>
                <Link to={`/updateAutor/${autor.id}`} className="btn btn-info mx-2">Editar</Link>
                <button onClick={() => { setSelectedAutorId(autor.id); setShowModal(true); }} className="btn btn-danger">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir este autor?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ListAutor;
