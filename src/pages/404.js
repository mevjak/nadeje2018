import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1><span>404 - Stránka neexistuje</span></h1>
    <p>Zkontrolujte, zda jste zadali požadovanou adresu správně.</p>
    <p><Link to={'/'}>Zpět na úvodní stránku</Link></p>
  </div>
);

export default NotFoundPage
