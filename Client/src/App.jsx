import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Nopage from "./pages/Nopage"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import SubmitCash from "./pages/SubmitCash"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="registration" element={<Registration/>}/>
      <Route path="about" element={<About/>}/>
      {/* <Route path="*" element={<Nopage/>}/> */}
      </Route>
    </Routes>
    <Routes>
      <Route path="dashboard" element={<Dashboard/>}>
      <Route path="submitcash" element={<SubmitCash/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
