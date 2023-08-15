import styled from "styled-components";
import { BaseButtonModel } from "../styled";


export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  flex: 1;
  >span{
    font-size: ${({theme})=>theme.fontSize.md};
    font-weight: 900;
    letter-spacing: 2px;
    margin-top: -2rem;
  }

  label{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`

const BaseInput = styled.input`
      width: 53%;
      height: 3rem;
      border-radius: ${({theme})=>theme.borderRadius.small};
      background-color: ${({theme})=>theme.colors.black};
      border: none;
      color: ${({ theme }) => theme.colors.white200};
      padding: 0 0.5rem 0 0.5rem;
      font-weight: 400;
`;

export const InputStyled = styled(BaseInput)`
  width: 100%;
`
export const ButtonModelCadastrar = styled(BaseButtonModel)`

      background-color: ${({theme})=>theme.colors.greenDark};
      &:hover{
        background-color: ${({theme})=>theme.colors.greenLigth};
        color: ${({theme})=>theme.colors.white100};

      }

`

