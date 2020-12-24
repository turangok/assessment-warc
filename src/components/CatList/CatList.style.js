import styled from "styled-components";

export const StyledCatList = styled.div`
    display: grid; 
    grid-template-columns : repeat(4, 1fr);
    padding: 2rem;
    grid-gap: 2.5rem;
    min-width: 21.25rem;

    @media(max-width:80rem){
        grid-template-columns : repeat(3, 1fr);    
    }

    @media(max-width:60rem){
        grid-template-columns : repeat(2, 1fr);
    }

    @media(max-width: 34rem){
        grid-template-columns : repeat(1, 1fr);
    }
` 
