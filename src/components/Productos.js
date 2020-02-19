import React, { Fragment, useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosAction';
import Producto from './Producto';

const Productos = () => {

    //Mandar a llamar la accion principal para retornarlos productos
    const dispatch = useDispatch();

    useEffect ( () => {
        //Productos cuando el componente este listo
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
    }, []) 

    //Acceder al state
    const loading  = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const productos = useSelector(state => state.productos.productos)

    console.log(productos);
    return ( 
        <Fragment>
            {error ? <div className="font-weight-bold alert alert-danger -text-center mt-4">Hubo un error...</div>
            : null}
           
                <h2 className="text-center my-5">Listado de Productos</h2>

                <table className="table table-striped">
                    <thead className="bg-primary table-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <Producto   
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </tbody>
                </table>
                {loading ? 'Cargando..!!' : null}
           
        </Fragment>
     );
}
 
export default Productos;