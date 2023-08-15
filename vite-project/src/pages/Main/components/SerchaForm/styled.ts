import styled from "styled-components";

export const Container = styled.div``

export const ContainerInput = styled.form`
    min-height: 3rem;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
    align-items: center;
    input{
      width: 53%;
      height: 3rem;
      border-radius: ${({theme})=>theme.borderRadius.small};
      background-color: ${({theme})=>theme.colors.black};
      border: none;
      color: ${({ theme }) => theme.colors.white200};
      padding: 0 0.5rem 0 0.5rem;
      font-weight: 400;

    }
    button{
      padding: 0.5rem 1.8rem 0.5rem 1.8rem;
      border-radius: ${({theme})=>theme.borderRadius.small};
      min-height: 3rem;
      margin-left: 10px;
      background-color:transparent;
      color: ${({theme})=>theme.colors.greenLigth};
      border: 3px solid ${({theme})=>theme.colors.greenDark};
      font-weight: 600;
      text-transform: capitalize;

      &:disabled{
        opacity: 0.7;
      }

      &:not(:disabled):hover{
        background-color: ${({theme})=>theme.colors.gray200};
        border: 3px solid ${({theme})=>theme.colors.gray200};
      }
      &:active{
        transform: scale(0.7);
      }
    }
`
