import { Controller, useForm } from "react-hook-form";
import { ButtonModel } from "../styled";
import { ButtonModelCadastrar, ContainerForm, InputStyled } from "./styled";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../../context/Trasactions/Context";
import { useContext } from "react";
import { api } from "../../../../../lib/axios/axios";

interface PropsNewTransatonForm {
  setshowDisplaModal:React.Dispatch<React.SetStateAction<boolean>>
}
export default function NewTransatonForm({setshowDisplaModal}:PropsNewTransatonForm) {
  const Schema = zod.object({
    description:zod.string(),
    price:zod.number(),
    category:zod.string(),
    type:zod.enum(['income','outcome'])
  })
  type NewTransationsInput = zod.infer<typeof Schema>
  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm<NewTransationsInput>({
    resolver: zodResolver(Schema)
  })


  async function handleAddNewTransation(data:NewTransationsInput) {
    const {description,category,price,type} = data

    createdNesTransations({description,category,price,type})
    reset()
    setshowDisplaModal(false)
  }

  const {createdNesTransations} = useContext(TransactionsContext)
  return(
  <ContainerForm onSubmit={handleSubmit(handleAddNewTransation)}>
    <span>Nova transação</span>
    <InputStyled
    type="text"
    placeholder='Descriçao'
    {...register('description')}
    />
    <InputStyled
    type="number"
    placeholder='Preço'
    {...register('price',{valueAsNumber:true})}

    />

    <InputStyled
    type="text"
    placeholder='Categoria'
    {...register('category')}

    />

  <Controller
  control={control}
  name="type"
  render={({field:{onChange}})=>{
    return(
      <label>
        <ButtonModel
        type="button"
        onClick={() => onChange('income')}
        value="income"
        >entrada</ButtonModel>
        <ButtonModel
        type="button"
        onClick={() => onChange('outcome')}
        value=""
        >saida</ButtonModel>
      </label>
    )
  }}
  />

    <ButtonModelCadastrar
    type='submit'
    >Cadastrar
    </ButtonModelCadastrar>
  </ContainerForm>
  )
}
