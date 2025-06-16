import { useEffect, useState } from "react";
import ListaTarefas from './components/ListaTarefas.jsx';
import AdicionarTarefa from './components/AdicionarTarefa.jsx'; 
import {v4} from 'uuid';

function App(){
  const [tarefas, setTarefas] = useState(
    JSON.parse(localStorage.getItem("tarefas") ) || []
  );

useEffect(() => {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}, [tarefas]);

//   useEffect(() => {
//     //chama apenas uma vez]
//     async function carregarTarefas() {
//       //chamar api
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=10",
//         {
//           method: "GET"
//         }
//       );
      
//       //pegar os dados que ela retorna
//       const dados = await response.json();

//       // Adicionar descricao e renomear os campos
//       const tarefasAdaptadas = dados.map((item) => ({
//         id: item.id,
//         titulo: item.title,
//         descricao: "Sem descrição fornecida", 
//         concluida: item.completed
// }));


//       //perciste dados no state
//       setTarefas(tarefasAdaptadas) ;
//     }
//     carregarTarefas();
//   }, []);



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

  function adicionarTarefa(titulo, descricao) {
    const notaTarefa = {
      id: v4(),
      titulo: titulo,
      descricao: descricao,
      concluida: false
    }
    setTarefas([...tarefas, notaTarefa]);
  }
  


  return(
    
   <div className="flex flex-col items-center bg-slate-500 p-6 h-screen">
    <div className="w-[500px] space-y-4">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Gerenciador de Tarefas 
      </h1>
    <AdicionarTarefa adicionarTarefa ={adicionarTarefa}/>
    <ListaTarefas tarefas={tarefas} quandoClicaNaTarefa={quandoClicaNaTarefa} deletarTarefa={deletarTarefa}/>
    </div>

   </div>
  )
}

export default App;