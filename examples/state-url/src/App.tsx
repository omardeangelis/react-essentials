import { BrowserRouter, Routes, Route } from "react-router"
import Result from "./result"
import Start from "./start"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
