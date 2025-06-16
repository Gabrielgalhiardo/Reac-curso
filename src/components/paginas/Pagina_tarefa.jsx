import { ChevronLeftIcon } from "lucide-react";
import { use } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Pagina_tarefa() {

  const [searchOarams] = useSearchParams();
  const titulo = searchOarams.get("titulo");
  const descricao = searchOarams.get("descricao");

  const navigate =useNavigate();
  

  return (
     
    <div className="w-screen h-screen bg-slate-500 p-6 flex flex-col items-center ">

      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
          onClick={() => navigate(-1)} 
          className="absolute left-0 top-0 p-2 bg-slate-400 text-slate-100 rounded-md">
            <ChevronLeftIcon/>
          </button>

          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

      <div className="bg-slate-200 p-4 rounded-md">
        <h2 className="text-xl text-slate-600 font-bold">
          {titulo}
        </h2>
        <p className="text-slate-600">
          {descricao}
        </p>
      </div>

      </div>
    </div>
  );
}
export default Pagina_tarefa;