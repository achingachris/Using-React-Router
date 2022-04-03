import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>A very boring app</h1>
      <nav>
        <Link to='/flights'>Flights</Link> |{' '}
        <Link to='/airports'>Airports</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
