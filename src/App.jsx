import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Esto es si estoy usando bootstrap comun 
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavbarComponent from './components/NavBarComponent'
import ItemListContainer from './components/ItemListContainer'
import NavbarBootstrapHTML from './components/NabvarBootstrapHTML';
import NavbarReactBootstrap from './components/NavBarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
   <BrowserRouter>
     <NavbarReactBootstrap/>
     <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Play Gamers'/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenidos a Play Gamers'/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
     </Routes>


   </BrowserRouter>
  )
}

export default App
