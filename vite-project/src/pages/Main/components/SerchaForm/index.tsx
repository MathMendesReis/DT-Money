import { ContainerInput } from "./styled";

export default function SearchForm(){
  return(
    <>
      <ContainerInput>
        <input
        placeholder='exemplo'
        type="text" />
        <button>buscar</button>
      </ContainerInput>
    </>
  )
}
