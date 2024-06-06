import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='NotFoundCont'>
      <h1>404</h1>
      <h2>Sayfa Bulunamadı</h2>
      <Link to="/">
        Ana Sayfa
      </Link>
    </div>
  )
}

export default NotFound