import { Evento } from "@/core";
import { InformacoesEvento } from "./informacoesEvento";

export interface DashboardEventoProps {
   evento: Evento,
}

export function DashboardEvento(props: DashboardEventoProps) {
   return (
      <div>
         <div>
            <InformacoesEvento evento={props.evento}/>
         </div>
      </div>
   )
}