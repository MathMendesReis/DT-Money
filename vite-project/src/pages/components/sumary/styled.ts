import styled from "styled-components";

export const ContainerSumary = styled.div`
  min-height: 9rem;
  margin-top: -5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;


`


const BaseCards = styled.div`
  width: 22rem;
  height: 9rem;
  background-color: ${({theme})=>theme.colors.gray300};
  border-radius: ${({theme})=>theme.borderRadius.medium};
`

export const CardProhibited = styled(BaseCards)``



