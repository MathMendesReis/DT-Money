import { ArrowDown, ArrowUp, CurrencyDollar } from "@phosphor-icons/react";
import { CardProhibited, ContainerSumary } from "./styled";
import useSumary from "../../../hooks/useSumary";
const iconSize:number = 42

export default function Sumary(){
  const sumary = useSumary()
  return (
    <ContainerSumary>
      <CardProhibited
      bgColor='green'
      >
        <div>
          <span>entrada</span>
          <ArrowUp size={iconSize}/>
        </div>
        <span>{sumary.income.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      </CardProhibited>
      <CardProhibited
      bgColor='red'

      >
        <div>
          <span>saida</span>
          <ArrowDown  size={iconSize}/>
        </div>
        <span>{sumary.outcome.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      </CardProhibited>
      <CardProhibited
        bgColor='green'
      >
          <div>
            <span>total</span>
            <CurrencyDollar size={iconSize} />
          </div>
        <span>{sumary.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      </CardProhibited>
    </ContainerSumary>
  )
}
