import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button.jsx";

function Tarefas({tarefas, quandoClicaNaTarefa, deletarTarefa}) {
    const navigate = useNavigate();
    
    function irParaTarefa(tarefas) {
        const query = new URLSearchParams();
        query.set("titulo", tarefas.titulo);
        query.set("descricao", tarefas.descricao);
        navigate(`/tarefas?${query.toString()}`);
    }
    
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow h-max">{tarefas.map((tarefas) => (
            <li key={tarefas.id} className="flex gap-2" >
                <button 
                onClick={() => quandoClicaNaTarefa(tarefas.id)} 
                className={`bg-slate-400 text-white p-2 rounded-md w-full text-left  flex items-center gap-2 ${tarefas.concluida && "line-through"}`}>
                    
                    {tarefas.concluida && <CheckIcon/>}
                    
                    {tarefas.titulo}

                    </button>
                
                <Button  
                onClick={ () => irParaTarefa(tarefas)}
                className="bg-slate-400 text-white p-2 rounded-md ">
                    <ChevronRightIcon/>
                </Button>
                
                 <Button onClick={() => deletarTarefa(tarefas.id)} className="bg-slate-400 text-white p-2 rounded-md">
                    <TrashIcon/>
                </Button>


            </li>
        )
        )}</ul>
    );
}

export default Tarefas;