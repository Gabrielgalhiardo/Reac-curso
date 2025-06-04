import { useState } from "react";

import Tarefas from './components/tarefas.jsx';
import AdicionarTarefa from './components/AdicionarTarefa.jsx'; 

function App(){
  const [tarefas, setTarefas] = useState([{
    id: 1,
    titulo: "Estudar React",
    descricao: "Estudar os conceitos básicos do React, incluindo componentes, props e state.",
    concluida: false
  }, {
    id: 2,
    titulo: "Praticar JavaScript",
    descricao: "Resolver exercícios de JavaScript para melhorar a lógica de programação.",
    concluida: false
  }, {
    id: 3,
    titulo: "Ler Documentação",
    descricao: "Ler a documentação oficial do React para entender melhor as APIs.",
    concluida: false
  }
]);

  function quandoClicaNaTarefa(tarefaId) {
    const novaTarefa = tarefas.map((tarefa) => {
      if(tarefaId === tarefa.id) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida
        }
      }
      return tarefa;
    })
    setTarefas(novaTarefa);
  }

  function deletarTarefa(tarefaId) {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
    setTarefas(novasTarefas);
  }
  


  return(
   <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-500 p-6">
    <div className="w-[500px]">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Gerenciador de Tarefas
      </h1>
    <AdicionarTarefa/>
    <Tarefas tarefas={tarefas} quandoClicaNaTarefa={quandoClicaNaTarefa} deletarTarefa={deletarTarefa}/>
    </div>

   </div>
  )
}

export default App;