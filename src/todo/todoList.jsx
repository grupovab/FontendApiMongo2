import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(todo =>(
                <tr key={todo.id}>
                    <td className={todo.done ? 'checado' : ''}>{todo.description}</td>
                    <td>
                        <IconButton style='success' icon='check' hide={todo.done}
                            onClick={()=> props.propriedadeChecar(todo)}></IconButton>
                        <IconButton style='warning' icon='undo' hide={!todo.done}
                            onClick={()=> props.propriedadeDesfazer(todo)}></IconButton>
                        <IconButton style='danger' icon='trash-o' hide={!todo.done}
                            onClick={()=> props.propriedadeExcluir(todo)}></IconButton>
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