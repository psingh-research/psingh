import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Mycomponents/Dashboard"
import Home from "./Mycomponents/Home"
import Mentorship from "./Mycomponents/Mentorship"
import Research from "./Mycomponents/Research"
import TeachingActivites from "./Mycomponents/TeachingActivites"
import Responsibilities from "./Mycomponents/Responsibilities"
import Navbar from "./DepthComponents/Navbar"
function App() {
  return (
    <>
      <div>
        <BrowserRouter basename="/PS_Portfolio">
         <div className="border border-gray-500">

          <Navbar />
          
         </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/mentorship" element={<Mentorship />}></Route>
            <Route path="/research" element={<Research />}></Route>
            <Route
              path="/teaching-activities"
              element={<TeachingActivites />}
            ></Route>
            <Route
              path="/responsibilities"
              element={<Responsibilities />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
