import React, { useState, useEffect} from 'react';
import Api from '../../api/Api';
import './Edit.css';
import { Link } from 'react-router-dom';

const Edit = (props) => {
    const _id = props.match.params.id;
    const history = props.history;
    const [tarefa, setTarefa] = useState({});

    useEffect(() => {

        async function getTarefaById() {
            const response = await Api.fetchGetById(_id);
            const result = await response.json();
            setTarefa(result);
        }
        getTarefaById();
    }, [_id]);

    const handleFieldsChange = (evento) => {
        const fields = {...tarefa};
        fields[evento.target.name] = evento.target.value;
        setTarefa(fields);
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const dataAlteracaoTarefa = Date.now();
        const tarefaList = {...tarefa};
        tarefaList.situacaoTarefa = parseInt(evento.situacaoTarefa);
        try{
            const response = await Api.fecthPut(tarefaList, _id);
            const result = await response.json();
            console.log(result.message);
            history.push('/');
        }catch(error){
            console.log(error);
        }
    };

    return(
        <>
            <div className='tudo'>
                <div className='card'>
                    <div className='div-titulo'>
                        <h3>Editando a Tarefa!!</h3>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='div-titulo'>
                                <label name='nomeTarefa' htmlFor='nomeTarefa'>Título</label>
                                <input type='text' value={tarefa.nomeTarefa} name='nomeTarefa' placeholder='Nome da Tarefa' id='nomeTarefa' onChange={handleFieldsChange}></input>
                            </div>
                            <div className='div-descricao'>
                                <label name='descricaoTarefa' htmlFor='descricaoTarefa'>Descrição</label>
                                <textarea rows='4' value={tarefa.descricaoTarefa} name='descricaoTarefa' placeholder='Descrição da Tarefa' id='descricaotarefa' onChange={handleFieldsChange}></textarea>
                            </div>
                            <div className='div-descricao'>
                                <label name='Tarefa' htmlFor='prioridadeTarefa'>Prioridade</label>
                                <select name='prioridadeTarefa' id='prioridadeTarefa' value={tarefa.prioridadeTarefa} onChange={handleFieldsChange}>
                                    <option value='baixa'>Baixa</option>
                                    <option value='media'>Média</option>
                                    <option value='alta'>Alta</option>
                                </select>
                            </div>
                            <div className='div-btn'>
                                <button className='btn-apagar' type='submit'>Alterar</button>
                                <Link to={`/`} className='btn-editar' type="button" value="Home">Voltar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Edit;