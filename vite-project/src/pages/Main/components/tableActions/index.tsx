import { dataAtualFormatada } from "../../../../helpers/formatData"
import { ContainerTable } from "./styled"

interface Transactions {
  id:number,
  description:string,
  type:string,
  category:string,
  price:number,
  createdAt:string
}
export default function TableActions({description,type,category,price,createdAt}: Transactions) {

  return (
    <>
        <ContainerTable
        type={type }
        >
        <thead>
            <tr>
              <th>{description}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
              <td>{category}</td>
              <td>{dataAtualFormatada(createdAt)}</td>
            </tr>
          </tbody>
        </ContainerTable>
    </>
  )
}
