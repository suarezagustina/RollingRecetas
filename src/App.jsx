import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio';
import Error404 from './components/pages/Error404';
import Formulario from './components/pages/receta/Formulario';
import Creador from './components/pages/Creador';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetalleReceta from './components/pages/receta/DetalleReceta';

function App() {

  return (
   <BrowserRouter>
   <Menu></Menu>
   <Routes>
    <Route exact path='/' element={<Inicio></Inicio>}></Route>
    <Route exact path='/creador' element={<Creador></Creador>}></Route>
    <Route exact path='/creador/editareceta' element={<Formulario></Formulario>}></Route>
    <Route exact path='/creador/creareceta' element={<Formulario></Formulario>}></Route>
    <Route exact path='/detalleReceta' element={<DetalleReceta></DetalleReceta>}></Route>
    <Route exact path='/error404' element={<Error404></Error404>}></Route>
    <Route path='*' element={<Error404></Error404>}></Route>
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  )
}

export default App
