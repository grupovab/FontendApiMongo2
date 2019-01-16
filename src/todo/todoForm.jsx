import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const teclaPrecionada = (e) => {       
        if (e.key === 'Enter') {
            props.propriedadeAdd()
        } else if (e.key === 'Escape') {
            props.propriedadeLimpar()
        } else if (e.shiftKey) {      
            console.log(e)   
            props.propriedadeBuscar()
        }

    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa' 
                    value={props.propriedadeTexto} 
                    onChange={props.propriedadeDigitacao}
                    onKeyUp={teclaPrecionada}>
                </input>
            </Grid>
            <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.propriedadeAdd}>
            </IconButton>
            <IconButton style='info' icon='search' onClick={props.propriedadeBuscar}>
            </IconButton>
            <IconButton style='default' icon='close' onClick={props.propriedadeLimpar}>
            </IconButton>
            </Grid>
        </div>
    )
} 