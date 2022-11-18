import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, deleteProduct, getAdminProducts } from '../../actions/productActions';
import { MDBDataTable } from 'mdbreact'

export const ProductsList = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.products)

    const deleteProductHandler= (id)=> {
        const response=window.confirm("Esta seguro de querer borrar este producto?")
        if (response){
            dispatch(deleteProduct(id))
            alert.success("Producto eliminado correctamente")
            window.location.reload(false)
        }
    }

    useEffect(() => {
        dispatch(getAdminProducts());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error])
    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Inventario',
                    field: 'inventario',
                    sort: 'asc'
                },
                {
                    label: 'Vendedor',
                    field: 'vendedor',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'acciones',
                },
            ],
            rows: []
        }
        products.forEach(product => {
            data.rows.push({
                nombre: product.nombre,
                precio: `$${product.precio}`,
                inventario: product.inventario,
                vendedor: product.vendedor,
                acciones: <Fragment>
                    <Link to={`/producto/${product._id}`} className="btn btn-outline-success py-1 mx-1">
                    <i class="bi bi-eye"></i>
                    </Link>
                    <Link to={`/updateProduct/${product._id}`} className="btn btn-outline-primary py-1 mx-1">
                    <i class="bi bi-pen"></i>
                    </Link>

                    <button className="btn btn-outline-danger py-1 mx-1 ml-2" onClick={() => deleteProductHandler(product._id)} >
                    <i class="bi bi-trash3"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }
    return (
        <Fragment>
            <div className="container shadow-lg my-5 px-3 fw-light">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <Fragment>
                            <h1 className="my-5 text-center title">Todos los Productos</h1>

                            {loading ?
                                <div class="spinner-border text-success" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                : (
                                    <MDBDataTable
                                        data={setProducts()}
                                        className="px-5"
                                        bordered
                                        striped
                                        hover
                                    />
                                )}

                        </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}