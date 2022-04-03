import { getFlight } from '../data'
import { useParams } from 'react-router-dom'

const Flight = () => {
  let params = useParams()
  let flight = getFlight(params.flightId)
  return (
    <>
      <main style={{ padding: '1rem' }}>
        <h2>{flight.flight_number}</h2>
        <p>Flight Number: {flight.flight_number}</p>
      </main>
    </>
  )
}

export default Flight
