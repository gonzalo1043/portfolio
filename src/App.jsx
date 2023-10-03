import './App.css'
import PrincipalPage from './components/PrincipalPage/PrincipalPage'
import Projects from './components/Projects/Projects'
import PersonalInformation from './components/PersonalInformation/PersonalInformation'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'bootstrap'
import NavBar from './components/DropdownMenu/DropdownMenu'
import RemediosVaroProject from './components/RemediosVaroProject/RemediosVaroProjects'
import TiendaDeVinilosProject from './components/TiendaDeVinilosProject/TiendaDeVinilosProject'

function App() {

  return (
    <>
    <BrowserRouter>
    
    <NavBar />

    <Routes>

    <Route path='/' element= {<PrincipalPage />}></Route>
    <Route path='/Projects' element={<Projects />}></Route>
    <Route path='/PersonalInformation' element= {<PersonalInformation />} ></Route>
    <Route path='/Projects/RemediosVaroProject' element= {<RemediosVaroProject />}></Route>
    <Route path='/Projects/TiendaDeVinilosProject' element = {<TiendaDeVinilosProject />}></Route>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
