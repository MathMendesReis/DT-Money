import Logo from '../../../../../public/vite.svg'
import { ContainerHeader } from './styled'

interface Props{
  setshowDisplaModal:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Header({setshowDisplaModal}:Props){
  return(
    <>
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
    </>
  )
}
