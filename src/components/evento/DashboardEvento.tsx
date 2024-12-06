import { Evento } from "@/core";
import { InformacoesEvento } from "./informacoesEvento";
import AcessarViaQrCode from "./acessarViaQrCode";

export interface DashboardEventoProps {
   evento: Evento,
}

export function DashboardEvento(props: DashboardEventoProps) {
   return (
      <div className="flex flex-col gap-2">
         <div className="flex gap-2">
            <InformacoesEvento evento={props.evento} classname="flex-1"/>
            <AcessarViaQrCode evento={props.evento}/>
         </div>
      </div>
   )
}