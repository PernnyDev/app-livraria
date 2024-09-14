    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import { Link } from 'react-router-dom';

    const ListLivro = () => {
    const [livros, setLivros] = useState([]);
    const [editoras, setEditoras] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        const fetchLivros = async () => {
        try {
            const res = await axios.get('http://localhost:8081/livro');
            setLivros(res.data);
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

        fetchLivros();
        fetchEditoras();
        fetchCategorias();
        fetchAutores();
    }, []);

    const handleDelete = async (id) => {
        try {
        await axios.delete(`http://localhost:8081/livro/${id}`);
        setLivros(livros.filter(livro => livro.id !== id));
        } catch (err) {
        console.error(err);
        }
    };

    const getEditoraDescricao = (id) => {
        const editora = editoras.find(editora => editora.id === id);
        return editora ? editora.descricao : 'Desconhecido';
    };

    const getCategoriaDescricao = (id) => {
        const categoria = categorias.find(categoria => categoria.id === id);
        return categoria ? categoria.descricao : 'Desconhecido';
    };

    const getAutorNome = (id) => {
        const autor = autores.find(autor => autor.id === id);
        return autor ? autor.nome : 'Desconhecido';
    };

    return (
        <div className="container">
        <h2 className="w-100 d-flex justify-content-center p-3">Listando Livros</h2>
        <Link to="/addLivro" className="btn btn-success mb-3">Adicionar Livro</Link>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Editora</th>
                <th>Categoria</th>
                <th>Autor</th>
                <th>Título</th>
                <th>Data Cadastro</th>
                <th>Data Alteração</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            {livros.map(livro => (
                <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{getEditoraDescricao(livro.fk_editora)}</td>
                <td>{getCategoriaDescricao(livro.fk_categoria)}</td>
                <td>{getAutorNome(livro.fk_autor)}</td>
                <td>{livro.titulo}</td>
                <td>{livro.createdAt}</td>
                <td>{livro.updatedAt}</td>
                <td>
                    <Link to={`/readLivro/${livro.id}`} className="btn btn-success mx-2">Ler</Link>
                    <Link to={`/updateLivro/${livro.id}`} className="btn btn-info mx-2">Editar</Link>
                    <button onClick={() => handleDelete(livro.id)} className="btn btn-danger">Deletar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default ListLivro;
