import { Routes, Route } from "react-router-dom"
import Inspections from "../pages/Inspections"
import Show from "../pages/Show"
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Inspections />} />
        <Route path="/inspections/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main
