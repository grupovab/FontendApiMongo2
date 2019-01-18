const ESTADO_INICIAL = {
    description: '', list: []
}

export default (state = ESTADO_INICIAL, acao) => {
    switch(acao.type){
        case 'DESCRICAO_MODIFICADA':
           return {...state, description: acao.payload}
        case 'TAREFAS_BUSCADAS':
           return {...state, list: acao.payload.data}
        case 'LIMPAR':
           return {...state, description : ''}
        default:
           return state
    }
}

