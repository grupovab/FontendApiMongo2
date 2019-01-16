import React, {Component} from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL ='http://apimongonotas.azurewebsites.net/api/tarefas'
//const URL = 'http://localhost:50621/api/tarefas'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { descricao: '' , list: [] }
        this.metodoAdd = this.metodoAdd.bind(this) 
        this.metodoDigitacao = this.metodoDigitacao.bind(this)
        this.metodoExcluir = this.metodoExcluir.bind(this)
        this.metodoChecar = this.metodoChecar.bind(this)
        this.metodoDesfazer = this.metodoDesfazer.bind(this)
        this.metodoBuscar = this.metodoBuscar.bind(this)
        //this.metodofiltrar = this.metodofiltrar.bind(this)
        this.metodoLimpar = this.metodoLimpar.bind(this)

        this.refresh()
    }
 
    metodoDigitacao(e){
        this.setState({...this.state, descricao: e.target.value})
    }
    metodoAdd() {
        const description = this.state.descricao   
        //Axios.post(URL, { description }).then(resp => this.refresh())          
    }

    refresh(description = '') {
        Axios.get(`${URL + '/BuscarTodos'}`)
              .then(resp => this.setState({...this.state, description, list : resp.data}))
    }

    filtrar(description = '') {
        console.log("buscar") 
        //Axios.get(`${URL + '/BuscarFiltrandoPorDescricao/' + description}`)
              //.then(resp => this.setState({...this.state, description, list : resp.data}))
    }

    metodoExcluir (todo){
        Axios.delete(`${URL}/${todo.id}`)
             .then(resp => this.refresh(this.state.descricao))
    }
    metodoChecar (todo){
        Axios.put(`${URL}/${todo.id}`,{description : todo.description , done : true})
             .then(resp => this.refresh(this.state.descricao))
    }
    metodoDesfazer (todo){
        Axios.put(`${URL}/${todo.id}`,{description : todo.description , done : false})
        .then(resp => this.refresh(this.state.descricao))
    }

    metodoBuscar (){
        this.filtrar(this.state.descricao)
    }

    metodoLimpar(){
        //this.refresh()
    }
   
    render (){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>   
                <TodoForm 
                    propriedadeDigitacao={this.metodoDigitacao} 
                    propriedadeTexto={this.state.descricao} 
                    propriedadeAdd={this.metodoAdd}
                    propriedadeBuscar={this.metodoBuscar}
                    propriedadeLimpar={this.metodoLimpar}/>
                <TodoList 
                    list={this.state.list} 
                    propriedadeExcluir={this.metodoExcluir}
                    propriedadeChecar={this.metodoChecar}
                    propriedadeDesfazer={this.metodoDesfazer}/>          
            </div>
        )
    }
}