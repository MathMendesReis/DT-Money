import { useContext, useState } from 'react'
import Sumary from '../components/sumary'
import Header from './components/header'
import SearchForm from './components/SerchaForm'
import Modal from './components/modal'
import TableActions from './components/tableActions'
import { ContainerTableDiv } from './styled'
import { TransactionsContext } from '../../context/Trasactions/Context'

export default function Main() {
  const [showDisplaModal,setshowDisplaModal] = useState<boolean>(false)
  const {transactions} = useContext(TransactionsContext)

  return (
    <div>
      <Header
      setshowDisplaModal={setshowDisplaModal}
      />
      <Sumary/>
      <SearchForm/>
      <ContainerTableDiv>
        {transactions.map((transaction) => (
        <TableActions
        key={transaction.id}
        description={transaction.description}
        type={transaction.type}
        category={transaction.category}
        createdAt={transaction.createdAt}
        price={transaction.price}
        id={transaction.id}
        />
        ))}
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
