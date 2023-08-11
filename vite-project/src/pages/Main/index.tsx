import Logo from '../../assets/react.svg'
import Sumary from '../components/sumary'
import { ContainerHeader, ContainerInput } from './styled'

export default function Main() {
  return (
    <div>
      <ContainerHeader>
        <div>
          <img src={Logo} alt="" />
          <h1>DT Money</h1>
        </div>
        <button>
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
    </div>
  )
}
