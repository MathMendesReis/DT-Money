import styled from "styled-components";

export const Container = styled.div``

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
