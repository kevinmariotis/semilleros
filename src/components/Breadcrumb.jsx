import React from 'react'

export const Breadcrumb = (props) => {
  return (
    <div className="container my-4">
        <p><i className={'fas fa-'+props.icon+' mx-2'}></i>{props.titulo}</p>
      </div>
  )
}
