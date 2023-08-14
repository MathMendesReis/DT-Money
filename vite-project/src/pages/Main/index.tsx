import { useState } from 'react'
import Sumary from '../components/sumary'
import Header from './components/header'
import SearchForm from './components/SerchaForm'
import Modal from './components/modal'
import TableActions from './components/tableActions'
import { ContainerTableDiv } from './styled'

export default function Main() {
  const [showDisplaModal,setshowDisplaModal] = useState<boolean>(false)
  return (
    <div>
      <Header
      setshowDisplaModal={setshowDisplaModal}
      />
      <Sumary/>
      <SearchForm/>
      <ContainerTableDiv>
        <TableActions/>
        <TableActions/>
        <TableActions/>
        <TableActions/>
      </ContainerTableDiv>
      <div>
      {showDisplaModal &&
      <Modal
      setshowDisplaModal={setshowDisplaModal}
      />}
      </div>
    </div>
  )
}
