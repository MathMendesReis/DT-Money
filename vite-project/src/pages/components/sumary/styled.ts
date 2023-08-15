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
  padding: 1rem;
`

type BackgroundColorOptions = 'red' | 'green'

interface PropsCard {
  bgColor: BackgroundColorOptions;
}
export const CardProhibited = styled(BaseCards)<PropsCard>`
display: flex;
flex-direction: column;
justify-content: space-between;
&:last-child{
    background-color: ${(props) => props.theme.colors[props.bgColor]};
    div{
      svg{
        color: ${(props) => props.theme.colors.gray200};
      }
    }
  }
div{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    font-size: 1.5rem;
    font-weight:600;
    letter-spacing: 1px;
  }
  svg{
    color: ${(props) => props.theme.colors[props.bgColor]};
    padding: 0.2rem 0.2rem;
    border-radius: 999px;
    border: 3px solid ${(props) => props.theme.colors[props.bgColor]};;
  }
}
>span{
  font-family: Roboto;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
`



