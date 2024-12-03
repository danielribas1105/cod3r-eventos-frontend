import { Evento } from "@/core";
import Informacao from "../shared/informacao";

export interface InformacoesEventoProps {
   evento: Evento,
}

export function InformacoesEvento(props: InformacoesEventoProps) {
   const { evento } = props;
   return (
      <div>
         <div className="flex gap-2">
            <Informacao label="Data:">
               <span>
                  {new Date(evento.data!).toLocaleDateString()}
                  {" às "}
                  {new Date(evento.data!).toLocaleTimeString()}
               </span>
            </Informacao>
         </div>
      </div>
   )
}