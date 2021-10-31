import styled, { keyframes } from "styled-components";

interface Props {
    image: string;
}

/*Animation */

const slideInUp = keyframes`
     0% {
  -webkit-transform: translateY(2%);
  transform: translateY(2%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  }
`


export const FilmsWrapper = styled.div`
    ul { 
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`


export const FilmCard = styled.li<Props>`
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            
            background-image: ${props => `url(https://image.tmdb.org/t/p/w500/${props.image})`};
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            width: 15vw;
            height: 50vh;
            margin: 2%;
            transition: transform 0.5s ease;

            &:hover {
                transform: scale(1.1);
            }
`

export const InfoCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

background: ${props => props.theme.colors.primary};
text-align: center;
opacity: 0;



.filmCard:hover & {
    display: flex;
    animation: ${slideInUp} .5s ease;
    animation-fill-mode: both;
}
div { 
    margin: 8px;
    button {
        font-size: 24px;
        width: 25%;
        background: inherit;
        border: 0;
        color: ${props => props.theme.colors.text};
        cursor: pointer;
    }
}
`


