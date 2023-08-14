import { createContext,useEffect,useState } from "react"

interface Transactions {
    id:number,
    description:string,
    type:string,
    category:string,
    price:number,
    createdAt:string
}

interface ContextProvder {
  transactions:Transactions[]
}
export const TransactionsContext = createContext({} as ContextProvder)
interface PropsProviderTransactions{
  children: React.ReactNode;
}
export default function ProviverTransictions({children}:PropsProviderTransactions) {
  const [transactions,setTransactions] = useState<Transactions[]>([])

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions")
    const data = await response.json()

    setTransactions(data)
  }


  console.log(transactions)
  useEffect(() => {
    loadTransactions()
  },[])
  return(
    <TransactionsContext.Provider value={{
      transactions,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
