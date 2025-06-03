import { useState } from "react";

import Tarefas from './components/tarefas.jsx';
import AdicionarTarefa from './components/AdicionarTarefa.jsx'; 

function App(){

  //state (estado) é uma variável que pode ser alterada
  //e quando alterada, o componente é re-renderizado
  //useState é um Hook que permite adicionar estado a componentes funcionais


  return(
   <div>
    <h1 className="text-red-500 text-4xl">Gerenciador de Tarefas</h1>
    <AdicionarTarefa />
    <Tarefas />

   </div>
  )
}

export default App;