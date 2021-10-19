import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Api from '../../../api/Api';
import '../list/List.css';

const List = () => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        getTarefas();
    }, []);

    const getTarefas = async () => {
        const response = await Api.fetchGetAll();
        const data = await response.json();
        setTarefas(data);
    }

    return(
        <>
            <div class='tudo center'>
            <h1>Lista de Tarefas</h1>
                {
                    tarefas.map((tarefa, index) => (
                        <div className='div-ok'>
                            <div className='div-ok-check'>
                                <input className='concluido' type='checkbox' name='concluido'></input>
                            </div>
                            <div className='div-ok-int'>
                                <Card data = {tarefa} key={index} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default List;