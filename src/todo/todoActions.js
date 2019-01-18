import axios from "axios";

const URL ='http://apimongonotas.azurewebsites.net/api/tarefas'

export const mudarDescricao = (e) => {
   return {type: 'DESCRICAO_MODIFICADA', payload: e.target.value}
}

export const buscarTodos = (description) => {
    const retorno = axios.get(`${description 
                                ? URL + '/BuscarFiltrandoPorDescricao/' + description 
                                : URL + '/BuscarTodos'}`)
    return { type : 'TAREFAS_BUSCADAS', payload: retorno}
} 

export const adicionarTodo = (description) => {
    //Dessa forma a segunda tarefa de buscar só é disparada depois do retorno da primeira
    //que foi diparada de forma assincrona
    console.log(description)
    return disparador  => {
        axios.post(URL,{description})
        .then(retorno => disparador({ type: 'TAREFA_ADICIONADA',payload : retorno.data}))
        .then(retorno => disparador(buscarTodos()))
        .then(retorno => disparador(limpar()))
    }
} 

export const marcarTodo = (todo) => {
    return disparador  => {
        axios.put(`${URL}/${todo.id}`,{description : todo.description, done : true})
        .then(retorno => disparador(buscarTodos()))
    }
} 
export const desmarcarTodo = (todo) => {
    return disparador  => {
        axios.put(`${URL}/${todo.id}`,{description : todo.description, done : false})
        .then(retorno => disparador(buscarTodos()))
    }
} 

export const excluir = (todo) => {
    return disparador  => {
        axios.delete(`${URL}/${todo.id}`)
        .then(retorno => disparador(buscarTodos()))
    }
}

export const limpar = () => {
    return [{ type : 'LIMPAR'},buscarTodos()]
}