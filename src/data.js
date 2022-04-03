let flights = [
  {
    id: 1,
    flight_number: 'AF27',
  },
  {
    id: 3,
    flight_number: 'KQ24',
  },
]

export function getFlights() {
  return flights
}

export function getFlight(id) {
  return flights.find((flight) => flight.id === id)
}
