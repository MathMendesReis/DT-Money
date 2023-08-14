import { ButtonModel, ButtonModelCadastrar, ButtonModelClose, ContainerModal, InputStyled } from "./styled"


interface PropsModal {
  setshowDisplaModal:React.Dispatch<React.SetStateAction<boolean>>

}
export default function Modal({setshowDisplaModal}:PropsModal){
  return(
    <>
     <ContainerModal>
          <div>
            <ButtonModelClose
            onClick={()=>{
              setshowDisplaModal(false)
            }}
            >
              x
            </ButtonModelClose>

            <form action="">
              <span>Nova transação</span>
              <InputStyled type="text"
              placeholder='Descriçao'
              />
              <InputStyled type="text"
              placeholder='Preço'
              />

              <InputStyled type="text"
              placeholder='Categoria'
              />

              <label htmlFor="">
                <ButtonModel>entrada</ButtonModel>
                <ButtonModel>saida</ButtonModel>
              </label>

              <ButtonModelCadastrar
              type='submit'
              >Cadastrar</ButtonModelCadastrar>
            </form>
          </div>
        </ContainerModal>
    </>
  )
}
