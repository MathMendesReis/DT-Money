import styled from "styled-components";


export const ContainerHeader = styled.header`
  background-color: ${({theme})=>theme.colors.black};
  min-height: 16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({theme})=>theme.spacing?.lg};
  flex-wrap: wrap;
  /* padding-bottom: 7rem; */
  /* padding-top: 1rem; */
  padding: 1rem 4rem 7rem 4rem ;
  div{
    display: flex;
    align-items: center;
    gap: ${({theme})=>theme.spacing?.lg};
  }

  button{
    background-color: ${({theme})=>theme.colors.greenLigth};
    color: ${({theme})=>theme.colors.white100};
    border: none;
    padding: ${({theme})=>theme.spacing?.md} ${({theme})=>theme.spacing?.lg};
    border-radius: ${({theme})=>theme.borderRadius.small};
    transition: transform ease 1s;
    &:active{
      transform: scale(0.7);
    }
    span{
      font-weight: 600;
      font-size: ${({theme})=>theme.fontSize.sm};
    }
  }
`;


export const ContainerInput = styled.div`
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
      transition: all 1s;

      &:hover{
        background-color: ${({theme})=>theme.colors.gray200};
        border: 3px solid ${({theme})=>theme.colors.gray200};
        transition: all 1s;
      }
      &:active{
        transition: all 1s;
        transform: scale(0.7);
      }
    }
`
