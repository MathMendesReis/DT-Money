import { useState } from 'react'
import Logo from '../../assets/react.svg'
import Sumary from '../components/sumary'
import { ButtonModel, ButtonModelCadastrar, ButtonModelClose, ContainerHeader, ContainerInput, ContainerModal, ContainerTable, ContainerTableDiv, InputStyled } from './styled'

export default function Main() {
  const [showDisplaModal,setshowDisplaModal] = useState<boolean>(false)
  return (
    <div>
      <ContainerHeader>
        <div>
          <img src={Logo} alt="" />
          <h1>DT Money</h1>
        </div>
        <button
        onClick={()=>{
          setshowDisplaModal(true)
        }}
        >
          <span>Nova Transação</span>
        </button>
      </ContainerHeader>
      <Sumary/>
      <ContainerInput>
        <input
        placeholder='exemplo'
        type="text" />
        <button>buscar</button>
      </ContainerInput>
      <ContainerTableDiv>
        <ContainerTable>
        <thead>
            <tr>
              <th>desenvolvimento do site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12.000</td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </ContainerTable>
      </ContainerTableDiv>
      <div>
      {showDisplaModal && (
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
      )}
      </div>
    </div>
  )
}
