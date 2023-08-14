import { ArrowDown, ArrowUp, CurrencyDollar } from "@phosphor-icons/react";
import { CardProhibited, ContainerSumary } from "./styled";
const iconSize:number = 42

export default function Sumary(){
  return (
    <ContainerSumary>
      <CardProhibited
      bgColor='green'
      >
        <div>
          <span>entrada</span>
          <ArrowUp size={iconSize}/>
        </div>
        <span>R$ 17.400,00</span>
      </CardProhibited>
      <CardProhibited
      bgColor='red'

      >
        <div>
          <span>saida</span>
          <ArrowDown  size={iconSize}/>
        </div>
        <span>R$ 1.259,00</span>
      </CardProhibited>
      <CardProhibited
        bgColor='green'
      >
          <div>
            <span>total</span>
            <CurrencyDollar size={iconSize} />
          </div>
        <span>R$ 17.400,00</span>
      </CardProhibited>
    </ContainerSumary>
  )
}
