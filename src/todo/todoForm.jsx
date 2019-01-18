import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {mudarDescricao,buscarTodos,adicionarTodo,limpar} from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.teclaPrecionada = this.teclaPrecionada.bind(this)
    }

    componentWillMount(){
        this.props.buscarTodos()
    }

    teclaPrecionada(e) {      
        //essa linha extrai os metodos das porps
        const {propriedadeTexto,buscarTodos,adicionarTodo } = this.props
        
        if (e.key === 'Enter') {
            e.shiftKey ? buscarTodos(propriedadeTexto) : adicionarTodo(propriedadeTexto)
        } else if (e.key === 'escape') {
            this.props.limpar
        }  
        console.log(e.key)  
    }

    render() {
        //essa linha extrai os metodos das porps
        const {propriedadeTexto,buscarTodos,adicionarTodo } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa' 
                        value={this.props.propriedadeTexto} 
                        onChange={this.props.mudarDescricao}
                        onKeyUp={this.props.teclaPrecionada}>
                    </input>
                </Grid>
                <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={() => adicionarTodo(propriedadeTexto)}>
                </IconButton>
                <IconButton style='info' icon='search' onClick={() => buscarTodos(propriedadeTexto)}>
                </IconButton>
                <IconButton style='default' icon='close' onClick={this.props.limpar}>
                </IconButton>
                </Grid>
            </div>
        )
    }
}

const mapEstados = state => ({propriedadeTexto : state.todo.description})
const mapAcoes = diparador => bindActionCreators({mudarDescricao,buscarTodos,adicionarTodo,limpar},diparador)
export default connect(mapEstados, mapAcoes)(TodoForm)