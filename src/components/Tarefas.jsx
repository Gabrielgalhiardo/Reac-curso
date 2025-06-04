import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tarefas({tarefas, quandoClicaNaTarefa, deletarTarefa}) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{tarefas.map((tarefas) => (
            <li key={tarefas.id} className="flex gap-2" >
                <button 
                onClick={() => quandoClicaNaTarefa(tarefas.id)} 
                className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${tarefas.concluida && "line-through"}`}>
                    {tarefas.titulo}
                    </button>
                
                <button className="bg-slate-400 text-white p-2 rounded-md ">
                    <ChevronRightIcon/>
                </button>

                 <button onClick={() => deletarTarefa(tarefas.id)} className="bg-slate-400 text-white p-2 rounded-md">
                    <TrashIcon/>
                </button>


            </li>
        )
        )}</ul>
    );
}

export default Tarefas;