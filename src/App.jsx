import { useState, useEffect } from 'react'
import UseFetch from './Hooks/UseFetch'
import './App.css'

const url = "https://api.escuelajs.co/api/v1/products";

function App() {
  const [data, loading, error] = UseFetch(url);

  return (
    <>
    <header>
      <h1>Photos</h1>
    </header>

    </>
  )
}

export default App
