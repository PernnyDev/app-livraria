import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ListCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategoriaId, setSelectedCategoriaId] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const res = await axios.get('http://localhost:8081/categoria');
        setCategorias(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategorias();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8081/categoria/${selectedCategoriaId}`);
      setCategorias(categorias.filter(categoria => categoria.id !== selectedCategoriaId));
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Listando Categorias</h2>
      <Link to="/addCategoria" className="btn btn-success mb-3">Adicionar Categoria</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.descricao}</td>
              <td>
                <Link to={`/readCategoria/${categoria.id}`} className="btn btn-success mx-2">Ler</Link>
                <Link to={`/updateCategoria/${categoria.id}`} className="btn btn-info mx-2">Editar</Link>
                <button onClick={() => { setSelectedCategoriaId(categoria.id); setShowModal(true); }} className="btn btn-danger">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir esta categoria?</Modal.Body>
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

export default ListCategoria;
