import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

  const [criptos, setCriptos] = useState()

  useEffect(() => {

    const API_URL = import.meta.env.VITE_API_URL

    /*fetch(`${API_URL}assets`)
    .then(response => response.json())
    .then(({data}) => setCriptos(data))
    .catch(error => console.error('La peticiópn falló'))*/

    axios.get(`${API_URL}assets`)
    .then(({data}) => setCriptos(data.data))
    .catch(error => console.error('La peticiópn falló'))

  }, [] )

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {
          criptos.map(({ id, rank, symbol, name, priceUsd }) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
          ))
        }
      </ol>
    </>
  )

}

export default App
