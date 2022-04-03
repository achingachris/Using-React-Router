import { Link, Outlet } from 'react-router-dom'
import { getFlights } from '../data'

const Flights = () => {
  let flights = getFlights()
  return (
    <>
      <h1>Flights</h1>
      <div style={{ display: 'flex' }}>
        <nav
          style={{
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          {flights.map((flight) => (
            <Link
              style={{ display: 'block', margin: '1rem 0' }}
              to={`/flights/${flight.id}`}
              key={flight.id}
            >
              {flight.flight_number}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default Flights
