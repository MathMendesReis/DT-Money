import styled from "styled-components";


export const ContainerTable = styled.table`
display: flex;
align-items: center;
justify-content: space-between;
width: 71rem;
gap: 15rem;
background-color: ${({theme})=>theme.colors.black};
padding: 1rem 2rem;
border-top-left-radius: ${({theme})=>theme.borderRadius.large};
border-bottom-right-radius:${({theme})=>theme.borderRadius.large};
overflow: auto;

&:first-child{
  margin-top: 1.5rem;
}

tbody{
flex: 1;


tr{
  display: flex;
  justify-content: space-between;
}
}
`;







