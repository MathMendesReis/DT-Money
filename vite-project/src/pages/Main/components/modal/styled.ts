import styled from "styled-components";

export const Container = styled.div``

export const ContainerModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);

  div{
    width: 33.4375rem;
    height: 35rem;
    background: ${({theme})=>theme.colors.gray300};
    border-radius: ${({theme})=>theme.borderRadius.large};
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    animation: visible 1s;


    @keyframes visible {
      0%{
      opacity: 0.1;
      }
      100%{
      opacity: 1;
      }
    }
  }


`

export const BaseButtonModel = styled.button`
padding: 1.2rem 1rem;
width: 100%;
background-color: ${({theme})=>theme.colors.gray200};
border: none;
color: ${({ theme }) => theme.colors.white200};
font-weight: 700;
text-transform: capitalize;
font-size: ${({theme})=>theme.fontSize.md};
letter-spacing: 2px;
display: flex;
gap: 0.5rem;
align-items: center;
justify-content: center;

&:hover{
  background-color: ${({theme})=>theme.colors.gray100};
  transition: all 1s;
}
`
export const ButtonModel = styled(BaseButtonModel)`
`

export const ButtonModelClose = styled(BaseButtonModel)`
      padding: 1rem;
      margin-left: auto;
      background-color: ${({theme})=>theme.colors.gray300};
      border: none;
      color: ${({ theme }) => theme.colors.white200};
      font-weight: 700;
      border-radius: ${({theme})=>theme.borderRadius.small};
      width: 2rem;
      height: 2rem;
`

