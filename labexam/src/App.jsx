import { Routes, Route } from "react-router-dom"
import HeaderComponent from "./components/HeaderComponent.jsx"
import Home from "./pages/Home.jsx"
import Students from "./pages/Students.jsx"

function App() {
  return (
    <div>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  )
}

export default App
