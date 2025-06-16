import { use, useState } from "react";
import Input from "./Input.jsx";

function AdicionarTarefa({adicionarTarefa}){

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input type="text" placeholder="digite o titulo da tarefa" className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
            value={titulo} 
            onChange={(event) => setTitulo(event.target.value)}/>    

            <Input type="text" placeholder="digite a descrição da tarefa" 
            value={descricao} 
            onChange={ (event) => setDescricao(event.target.value)}/>    
        
            <button 
            onClick={() => {
                if(titulo.trim() === "" || descricao.trim() === "") {
                    alert("Por favor, preencha todos os campos.");
                    return;
                }
                adicionarTarefa(titulo, descricao);
                setTitulo("");
                setDescricao("");
            }}
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}
export default AdicionarTarefa;