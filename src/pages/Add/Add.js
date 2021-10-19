import React from 'react';
import './Add.css';
import Api from '../../api/Api';
import { Link } from 'react-router-dom';


const Add = (props) => {
    const history = props.history;

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const nomeTarefa = evento.target.nomeTarefa.value;
        const descricaoTarefa = evento.target.descricaoTarefa.value;
        const prioridadeTarefa = evento.target.prioridadeTarefa.value;
        
        const tarefa = {
            nomeTarefa, 
            descricaoTarefa, 
            prioridadeTarefa
        }

    try{
        const responde = await Api.fecthPost(tarefa)
        const result = await responde.json();
        console.log(result.message);
        history.push('/');
    }catch(error) {
        console.log(error);
    }
}

    return(
        <>
            <div className='tudo'>
                <div className='card'>
                    <div className='div-titulo'>
                        <h3>Inclusão de Tarefa!!</h3>
                    </div>
                    <div className='div-titulo'>
                        <form onSubmit={handleSubmit}>
                            <div className='div-titulo'>
                                <label name='nomeTarefa' htmlFor='nomeTarefa'>Título</label>
                                <input type='text' name='nomeTarefa' placeholder='Nome da Tarefa' id='nomeTarefa'></input>
                            </div>
                            <div className='div-descricao'>
                                <label name='descricaoTarefa' htmlFor='descricaoTarefa'>Descrição</label>
                                <textarea rows='4' name='descricaoTarefa' placeholder='Descrição da Tarefa' id='descricaotarefa'></textarea>
                            </div>
                            <div className='div-descricao'>
                                <label name='Tarefa' htmlFor='prioridadeTarefa'>Prioridade</label>
                                <select name='prioridadeTarefa' id='prioridadeTarefa'>
                                    <option value='baixa'>Baixa</option>
                                    <option value='media'>Média</option>
                                    <option value='alta'>Alta</option>
                                </select>
                            </div>
                            <div className='div-btn'>
                                <button className='btn-apagar' type='submit'>Cadastrar</button>
                                <Link to={`/`} className='btn-editar' type="button" value="Home">Voltar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Add;