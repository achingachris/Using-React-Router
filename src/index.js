import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Airports from './pages/Airports'
import Flights from './pages/Flights'
import Flight from './pages/Flight'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='flights' element={<Flights />}>
        <Route path=':invoiceId' element={<Flight />} />
      </Route>
      <Route path='airports' element={<Airports />} />
      <Route
        path='*'
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
)
