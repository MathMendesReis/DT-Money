import { useForm } from "react-hook-form";
import { ContainerInput } from "./styled";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../context/Trasactions/Context";
import { useContext } from "react";


export default function SearchForm(){

  const searchFormSchemma = z.object({
    query:z.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitted }
  } = useForm<SearchFormsInput>({
    resolver:zodResolver(searchFormSchemma)
  })



  type SearchFormsInput = z.infer<typeof searchFormSchemma>
  async function handleSearchTransations(data:SearchFormsInput) {
    await new Promise(resolve => setTimeout(resolve,2000))
    await fetchTransactions(data.query)

  }

  const {fetchTransactions} = useContext(TransactionsContext)
  return(
      <ContainerInput onSubmit={handleSubmit(handleSearchTransations)}>
        <input
        {...register('query')}
        placeholder='Busque uma transação'
        type="text" />
        <button
        disabled={isSubmitted}
        >buscar</button>
      </ContainerInput>
  )
}
