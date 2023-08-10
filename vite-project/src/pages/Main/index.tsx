import Logo from '../../assets/react.svg'
import { ContainerHeader } from './styled'

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
    </div>
  )
}
