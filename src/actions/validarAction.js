import {
    VALIDAR_FORMULARIO,
    VALIDAR_FORMULARIO_EXITO,
    VALIDAR_FORMULARIO_ERROR
} from '../types';

export function validarFormularioAction() {
    return (dispatch) => {
        dispatch( iniciarValidacion() )
    }
} 
export const exitoValidacion = () => {
    return {
        type: VALIDAR_FORMULARIO_EXITO
    }
}

export const errorValidacion = () => {
    return {
        type: VALIDAR_FORMULARIO_ERROR
    }
}

export const iniciarValidacion = () =>{
    return {
        type: VALIDAR_FORMULARIO
    }
}