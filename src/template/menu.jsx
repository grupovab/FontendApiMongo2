import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>         
        <div className='container'>
            <a className='navbar-brand' href='#'>
                <i className='fa fa-calendar-check-o'></i> Todo App
            </a>
                <div id='navbar' className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>s
                        <li><a href='#/todos'>Tarefas</a></li>
                        <li><a href='#/about'>Sobre</a></li>
                    </ul>
               </div>
        </div>
    </nav>
)