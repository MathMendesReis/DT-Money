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
  fetchTransactions:(query?:string)=> Promise<void>
}
export const TransactionsContext = createContext({} as ContextProvder)
interface PropsProviderTransactions{
  children: React.ReactNode;
}
export default function ProviverTransictions({children}:PropsProviderTransactions) {
  const [transactions,setTransactions] = useState<Transactions[]>([])

  async function fetchTransactions(query?:string) {
    const url = new URL("http://localhost:3000/transactions")

    if(query){
      url.searchParams.append("q",query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
  }


  useEffect(() => {
    fetchTransactions()
  },[])
  return(
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
