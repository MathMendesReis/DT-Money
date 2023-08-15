import styled, { css } from "styled-components";


type Transactions = "outcome"|"income"
interface Props {
  type: string
}
export const ContainerTable = styled.table<Props>`
display: flex;
align-items: center;
justify-content: space-between;
width: 71rem;
gap: 15rem;
background-color: ${({theme})=>theme.colors.black};
padding: 1rem 2rem;
border-top-left-radius: ${({theme})=>theme.borderRadius.large};
border-bottom-right-radius:${({theme})=>theme.borderRadius.large};

&:first-child{
  margin-top: 1.5rem;
}

thead{
  width: 15rem;
}

tbody{
flex: 1;

tr{
  display: flex;
  justify-content: space-between;
  td{
    text-align: flex-start;
    &:first-child{
      &:first-child{
    ${props =>
    props.type === "outcome" &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `}

  ${props =>
    props.type === "income" &&
    css`
      color: ${({ theme }) => theme.colors.green};
    `}
  }
    }
  }
}
}
`;







