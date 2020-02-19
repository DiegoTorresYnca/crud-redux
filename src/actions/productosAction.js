import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDICION_EXITO,
    PRODUCTO_EDICION_ERROR
 } from '../types';

 import clienteAxios from '../config/axios';

 // Crear en nuevo producto - Funcion Principal
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( nuevoProducto() );

        //Insertar en la API
        clienteAxios.post('/libros', producto)
            .then(res => {
                console.log(res);
                // Si se inserta correctamente
                dispatch(agregarProductoExito(producto))
            })
            .catch(error => {
                dispatch(agregarProductoError())
                console.log(error);
            })

    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
})

export const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

export const agregarProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR
})

//Obtener listado de productos (Consultar API)

export function obtenerProductosAction() {
    return (dispatch) => {
        dispatch( obtenerProductosComienzo() );

        //consultar la API
        clienteAxios.get('/libros')
            .then(res => {
                 console.log(res)
                dispatch(descargaProductosexitosa(res.data))
            }, error => {
                console.log(error);
                dispatch( descargaProductosError() )
            })
            
    }
}

export const obtenerProductosComienzo = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
})

export const descargaProductosexitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
})

export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
})

//Funcion que elimina un producto en especifico
export function borrarProductoAction(id) {
    return (dispatch) => {
        dispatch(obtenerProductoEliminar());

        //Eliminar en la API
        clienteAxios.delete(`/libros/${id}`)
            .then(res => {
                console.log(res);
                dispatch( eliminarProductoExto(id) );
            })
            .catch(error => {
                dispatch(eliminarProductoError());
                console.log(error);
            })
    }
}

export const obtenerProductoEliminar = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR
})

export const eliminarProductoExto = (id) => ({
    type: PRODUCTO_ELIMINADO_EXITO,
    payload: id
})

export const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR
})

//obtener el producto a Editar
export function obtenerProductoEditarAction(id) {
    return (dispatch) => {
        dispatch(obtenerProductoAction());

        //obtener producto de la API
        clienteAxios.get(`/libros/${id}`)
            .then(res => {
                console.log(res.data);
                dispatch(obtenerProductoEditarExito(res.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(obtenerProductoEditarError());
            })
    }
}

export const obtenerProductoAction = () => ({
    type: OBTENER_PRODUCTO_EDITAR
})

export const obtenerProductoEditarExito = (producto) => ({
    type: PRODUCTO_EDITAR_EXITO,
    payload: producto
})

export const obtenerProductoEditarError = () => ({
    type: PRODUCTO_EDITAR_ERROR
})

//Modifica un porducto en la API y state
export function editarProductoAction(producto) {
    return (dispatch) => {
        dispatch( comenzarEdicionProducto() );

        //consultar la API
        clienteAxios.put(`/libros/${producto.id}`, producto)
            .then(res => {
                console.log(res.data);
                dispatch(editarProductoExito(producto));
            })
            .catch(error => {
                console.log(error);
                dispatch(editarProductoError());
            })
    }
}

export const comenzarEdicionProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
})

export const editarProductoExito = (producto) => ({
    type: PRODUCTO_EDICION_EXITO,
    payload: producto
})

export const editarProductoError = () => ({
    type: PRODUCTO_EDICION_ERROR
})