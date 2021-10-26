import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 82px;
  padding: 0 0.5%;
  background: ${(props) => props.theme.colors.primary};
`;

export const Input = styled.label`
padding: 12px;
background: ${(props) => props.theme.colors.background};
transition: all 0.5s ease;
    &:focus-within {
        border: 1px solid ${(props) => props.theme.colors.text}
    }
    input {
        color: ${(props) => props.theme.colors.text};
        border: 0;
        background: transparent;
        outline: 0;

        width: 350px;
    }
    svg {
        cursor: pointer
    }
`;


export const SecondaryNavigation = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 298px;

`

export const User = styled.div`
    width: 64px;
    height: 68px;
    
    background: ${(props) => props.theme.colors.background};
    border-radius: 8px;
`