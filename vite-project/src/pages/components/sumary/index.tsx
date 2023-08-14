import { ArrowDown, ArrowUp, CurrencyDollar } from "@phosphor-icons/react";
import { CardProhibited, ContainerSumary } from "./styled";
import { TransactionsContext } from "../../../context/Trasactions/Context";
import { useContext } from "react";
const iconSize:number = 42

export default function Sumary(){
  const {transactions} = useContext(TransactionsContext)

  const sumary = transactions.reduce(
    (acc,transaction)=>{
      if(transaction.type === 'income'){
        acc.income += transaction.price
        acc.total += transaction.price
      }else{
        acc.outcome += transaction.price
        acc.total -= transaction.price

      }
      return acc
    },
    {
      income:0,
      outcome:0,
      total:0
    })
  return (
    <ContainerSumary>
      <CardProhibited
      bgColor='green'
      >
        <div>
          <span>entrada</span>
          <ArrowUp size={iconSize}/>
        </div>
        <span>{sumary.income}</span>
      </CardProhibited>
      <CardProhibited
      bgColor='red'

      >
        <div>
          <span>saida</span>
          <ArrowDown  size={iconSize}/>
        </div>
        <span>{sumary.outcome}</span>
      </CardProhibited>
      <CardProhibited
        bgColor='green'
      >
          <div>
            <span>total</span>
            <CurrencyDollar size={iconSize} />
          </div>
        <span>{sumary.total}</span>
      </CardProhibited>
    </ContainerSumary>
  )
}
