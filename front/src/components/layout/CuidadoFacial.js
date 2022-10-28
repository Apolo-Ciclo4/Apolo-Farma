import React, { Fragment } from 'react'
import { consumoData } from '../json/consumoData';
const CuidadoFacial = () => {
  return (
    <Fragment>
      <section id='productos' className=' container mt-5  fw-light'>
        <div className='row justify-content-center height="450" width="450"'>
          <h1 className='title' id='Productos faciles'> Cuidado Facial </h1>
          {consumoData && consumoData.map(consumoData=> (
            <div className='col-sm-12 col-md-6 col-lg-3 my-3 fw-light'>
              <div className='card p-3 rounded'>
                <img src={consumoData.imagen[0].url} alt='Producto prueba' ></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id="titulo_producto" className='color-links'> {consumoData.nombre} </h5>
                  <div className='rating mt-auto'>
                    <div >
                      <div><b>Descripción: </b>{consumoData.descripcion} </div>
                    </div>
                    <span id="No_de_opiniones"><b>Tamaño: </b>{consumoData.Tamaño} </span>
                    <div><span id="No_de_opiniones"><b>Categoria: </b>{consumoData.categoria} </span> </div>
                  </div>
                  <p className='card-text'>{consumoData.precio} </p>
                  <a href='http://localhost:3000' id="view_btn" className='btn btn-outline-warning'>
                    Agregar <i class="bi bi-cart-plus"></i>

                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </Fragment>
  )
}
export default CuidadoFacial