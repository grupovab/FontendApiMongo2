import React from 'react'
import {connect} from 'react-redux'
import IconButton from '../template/iconButton'

import {bindActionCreators} from 'redux'
import {marcarTodo,desmarcarTodo,excluir} from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(todo =>(
                <tr key={todo.id}>
                    <td className={todo.done ? 'checado' : ''}>{todo.description}</td>
                    <td>
                        <IconButton style='success' icon='check' hide={todo.done}
                            onClick={()=> props.marcarTodo(todo)}></IconButton>
                        <IconButton style='warning' icon='undo' hide={!todo.done}
                            onClick={()=> props.desmarcarTodo(todo)}></IconButton>
                        <IconButton style='danger' icon='trash-o' hide={!todo.done}
                            onClick={()=> props.excluir(todo)}></IconButton>
                    </td>
                </tr>
            ))
        )     
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                     <th>Descricao</th>
                     <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapEstados = state => ({list : state.todo.list})
const mapAcoes = diparador => bindActionCreators({marcarTodo,desmarcarTodo,excluir},diparador)
export default connect(mapEstados, mapAcoes)(TodoList)