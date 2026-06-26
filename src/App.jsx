import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event from "../src/pages/Event.jsx"
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/Eventos' element={<Event/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
