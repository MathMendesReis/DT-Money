import styled from "styled-components";


export const ContainerHeader = styled.header`
  background-color: ${({theme})=>theme.colors.black};
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({theme})=>theme.spacing?.lg};
  flex-wrap: wrap;
  div{
    display: flex;
    align-items: center;
    gap: ${({theme})=>theme.spacing?.lg};
    margin-right: auto;
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
