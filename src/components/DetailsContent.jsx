import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DetailsContent = () => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

  return (
    <div>
      <div class="card">
        <div class="card-header p-2">
            <button class="btn btn-primary btn-sm" type="button" onClick={() => {navigate('/perfil')}}><i className='fas fa-arrow-left'></i> Regresar</button>
        </div>
        <div class="card-body container table-responsive" id="pills-tabContent">
            <div className="container">
                <p className='text-muted d-flex align-items-center'><div className="content circle bg-success me-2"></div>Estado: Activo</p>
            </div>
            <div className="row container">
                <div className="col-sm-6 my-2">
                    <p className='fw-bold m-0'>Nombre del semillero</p>
                    <p className='text-muted m-0'>Robótica</p>
                </div>
                <div className="col-sm-6 my-2">
                    <p className='fw-bold m-0'>Programa_academico</p>
                    <p className='text-muted m-0'>pregrado</p>
                </div>
                <div className="col-sm-6 my-2">
                    <p className='fw-bold m-0'>Coordinador</p>
                    <p className='text-muted m-0'>Sebastian Agudelo</p>
                </div>
                <div className="col-sm-6 my-2">
                    <p className='fw-bold m-0'>Facultad</p>
                    <p className='text-muted m-0'>Ingeniera de sistemas</p>
                </div>
                <div className="col-sm-6 my-2">
                    <p className='fw-bold m-0'>Fecha de creacion</p>
                    <p className='text-muted m-0'>2022-06-13</p>
                </div>
                <div className="col-sm-6 my-2">
                    <p className='fw-bold m-0'>Ultima actualizacion</p>
                    <p className='text-muted m-0'>2022-06-13</p>
                </div>
            </div>
            <div className="container mt-4">
                <div className='my-3'>
                    <label htmlFor="grupo" className='form-label'>Grupo de investigacion</label>
                    <input type="text" id='grupo' className='form-control' value='xxxxxxxx' />
                </div>
                <div className='my-3'>
                    <label htmlFor="linea" className='form-label'>Linea y sublinea de investigacion asociada</label>
                    <input type="text" id="linea" className='form-control' value='xxxxxxxx' />
                </div>
                <div className='my-3'>
                    <label htmlFor="tematica" className='form-label'>Tematica</label>
                    <input type="text" id='tematica' className='form-control' value='xxxxxxxxxxxxxxxx' />
                </div>
                <div className='my-3'>
                    <label htmlFor="justificacion" className='form-label'>Justificacion</label>
                    <textarea className='form-control' rows='4' value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></textarea>
                </div>
            </div>
            {id === '1' ? (
                <div className='container'>
                    <button type="button" title="Aprobar Semillero" className="btn btn-success m-1" ><i className="fas fa-check"></i> Aceptar</button>
                    <button type="button" title="Rechazar Semillero" className="btn btn-danger m-1" ><i className="fas fa-trash"></i> Rechazar</button>
                </div>
            ):(
                <div className='container'>
                    <button type="button" title="Aprobar Semillero" className="btn btn-success m-1" ><i className="fas fa-pen"></i> Actualizar</button>
                    
                </div>
            )}
        </div>
      </div>
    </div>
  )
}
