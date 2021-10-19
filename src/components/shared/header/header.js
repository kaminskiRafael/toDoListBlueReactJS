import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <>
            <div className='tudo-header'>
                <nav>
                    {/* <Link to='/' >
                        ToDoList - Tarefas!!!
                    </Link> */}
                    {/* <button type='button' className=''> DESCOBRIR</button> */}

                    <Link to='/' >
                        Home
                    </Link>
                    <Link to='/add' >
                        Cadastrar
                    </Link>
                </nav>
            </div>
        </>
    )
}
export default Header;