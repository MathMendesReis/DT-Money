import { createContext,useEffect,useState } from "react"
import { api } from "../../lib/axios/axios"

interface Transactions {
    id:number,
    description:string,
    type:string,
    category:string,
    price:number,
    createdAt:string
}
interface CreatedNewTransaction {
    description:string,
    type:string,
    category:string,
    price:number,
}

interface ContextProvder {
  transactions:Transactions[]
  setTransactions:React.Dispatch<React.SetStateAction<Transactions[]>>
  fetchTransactions:(query?:string)=> Promise<void>
  createdNesTransations:(data:CreatedNewTransaction)=>void
}
export const TransactionsContext = createContext({} as ContextProvder)
interface PropsProviderTransactions{
  children: React.ReactNode;
}
export default function ProviverTransictions({children}:PropsProviderTransactions) {
  const [transactions,setTransactions] = useState<Transactions[]>([])

  async function fetchTransactions(query?:string) {
    const response = await api.get('/transactions',{
      params:{
        q: query
      }
    })

    setTransactions(response.data)
  }

  async function createdNesTransations(data:CreatedNewTransaction) {
    const {description,category,price,type} = data
    const response = await api.post('/transactions',{
      description,
      category,
      price,
      type,
      createdAt:new Date().toISOString(),
    })

    setTransactions((state)=>[response.data, ...state])
  }


  useEffect(() => {
    fetchTransactions()
  },[])
  return(
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      setTransactions,
      createdNesTransations
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
