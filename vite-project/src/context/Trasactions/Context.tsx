import { createContext,useCallback,useEffect,useState } from "react"
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
  createdNesTransations:(data:CreatedNewTransaction)=>void
  fetchTransactionsCallback:(query?: string)=>void
}
export const TransactionsContext = createContext({} as ContextProvder)
interface PropsProviderTransactions{
  children: React.ReactNode;
}
export default function ProviverTransictions({children}:PropsProviderTransactions) {
  const [transactions,setTransactions] = useState<Transactions[]>([])

  const fetchTransactionsCallback = useCallback(async (query?: string) => {
    try {
      const response = await api.get('/transactions', {
        params: {
          q: query
        }
      });

      setTransactions(response.data);
    } catch (error) {
      // Tratar erros aqui, se necessário
      console.error('Erro ao buscar transações:', error);
    }
  }, []);



  const createdNesTransations = useCallback(async(data:CreatedNewTransaction)=>{
    const {description,category,price,type} = data
    const response = await api.post('/transactions',{
      description,
      category,
      price,
      type,
      createdAt:new Date().toISOString(),
    })

    setTransactions((state)=>[response.data, ...state])
  },[])




  useEffect(() => {
    fetchTransactionsCallback()
  },[])
  return(
    <TransactionsContext.Provider value={{
      transactions,
      setTransactions,
      createdNesTransations,
      fetchTransactionsCallback
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
