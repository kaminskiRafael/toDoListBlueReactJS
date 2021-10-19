import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const tarefa = props.data;
    return(
        <>
            <Link to={`/view/${tarefa._id}`} >
                <h5>{tarefa.nomeTarefa}</h5>
                <span>{tarefa.descricaoTarefa}</span>
            </Link>
        </>
    )
}
export default Card;