import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ListEditora = () => {
  const [editoras, setEditoras] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEditoraId, setSelectedEditoraId] = useState(null);

  useEffect(() => {
    const fetchEditoras = async () => {
      try {
        const res = await axios.get('http://localhost:8081/editora');
        setEditoras(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEditoras();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8081/editora/${selectedEditoraId}`);
      setEditoras(editoras.filter(editora => editora.id !== selectedEditoraId));
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Listando Editoras</h2>
      <Link to="/addEditora" className="btn btn-success mb-3">Adicionar Editora</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Data Cadastro</th>
            <th>Data Alteração</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {editoras.map(editora => (
            <tr key={editora.id}>
              <td>{editora.id}</td>
              <td>{editora.descricao}</td>
              <td>{editora.createdAt}</td>
              <td>{editora.updatedAt}</td>
              <td>
                <Link to={`/readEditora/${editora.id}`} className="btn btn-success mx-2">Ler</Link>
                <Link to={`/updateEditora/${editora.id}`} className="btn btn-info mx-2">Editar</Link>
                <button onClick={() => { setSelectedEditoraId(editora.id); setShowModal(true); }} className="btn btn-danger">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir esta editora?</Modal.Body>
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

export default ListEditora;
