import NewTransatonForm from "./newTransationForm"
import {ButtonModelClose, ContainerModal } from "./styled"


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
      <NewTransatonForm
      setshowDisplaModal={setshowDisplaModal}
      />
    </div>
  </ContainerModal>
    </>
  )
}
