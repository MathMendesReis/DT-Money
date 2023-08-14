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

  form{
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
  }
`

const BaseButtonModel = styled.button`
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

export const ButtonModelCadastrar = styled(BaseButtonModel)`
      background-color: ${({theme})=>theme.colors.greenDark};
      &:hover{
        background-color: ${({theme})=>theme.colors.greenLigth};
        color: ${({theme})=>theme.colors.white100};

      }

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
