import Countriespage from "./pages/countriespage"
import Aboutpage from "./pages/aboutpage"
import Homepage from "./pages/homepage"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Countrypage from "./pages/countrypage"

export default function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Homepage />}></Route>
          <Route path='/Aboutpage' element={<Aboutpage />}></Route>
          <Route path='/Countriespage' element={<Countriespage />}></Route>
          <Route path='/Countrypage' element={<Countrypage />}></Route>
          



        </Routes>
      </BrowserRouter>

      
    </>
  )
}

