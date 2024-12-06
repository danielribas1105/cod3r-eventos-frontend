import { Convidado, Evento } from "@/core";
import { InformacoesEvento } from "./informacoesEvento";
import AcessarViaQrCode from "./acessarViaQrCode";
import Estatistica from "../shared/estatistica";
import imgAcompanhantes from "@/../public/icones/acompanhantes.svg";
import imgConfirmados from "@/../public/icones/confirmados.svg";
import imgConvidados from "@/../public/icones/convidados.svg";
import ListaConvidados from "./listaConvidados";

export interface DashboardEventoProps {
   evento: Evento,
   presentes: Convidado[],
   ausentes: Convidado[],
   totalGeral: number
}

export function DashboardEvento(props: DashboardEventoProps) {
   return (
      <div className="flex flex-col gap-2">
         <div className="flex gap-2">
            <InformacoesEvento evento={props.evento} classname="flex-1" />
            <AcessarViaQrCode evento={props.evento} />
         </div>
         <div className="grid grid-cols-3 gap-6 mt-4">
            <Estatistica
               texto="Espectativa de convidados"
               valor={props.evento.publicoEsperado}
               imagem={imgConvidados}
            />
            <Estatistica
               texto="Confirmações"
               valor={props.presentes.length}
               imagem={imgConfirmados}
            />
            <Estatistica
               texto="Total confirmado"
               valor={props.totalGeral}
               imagem={imgAcompanhantes}
            />
         </div>
         
         <button className="botao azul self-end mt-12">
            <span>Atualizar Lista de Convidados</span>
         </button>

         <span className="flex py-2 text-xl font-bold text-white/80">
            Convidados que confimaram PRESENÇA
         </span>
         <ListaConvidados convidados={props.presentes} />

         <span className="flex py-2 text-xl font-bold text-white/80">
            Convidados que confirmaram AUSÊNCIA
         </span>
         <ListaConvidados convidados={props.ausentes} />
      </div>
   )
}