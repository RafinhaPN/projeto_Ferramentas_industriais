//import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Ferramentas/Home';
import Listar from "./pages/Ferramentas/LIstar";
import Visualizar from './pages/Ferramentas/Detalhes'


function App (){

    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/listar" element={<Listar/>} />
          <Route path="/detalhes/:id" element={<Visualizar/>} />
        </Routes>
      </BrowserRouter>
    )
  }



export default App;
