import styled from "styled-components";

export const ContainerApp = styled.div`
    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 4rem 1.5rem;
`

export const HeaderApp = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255,255,255, 0.1);
    span {
        font-size: 1.6rem;
        color: rgba(17, 176, 200, 0.4);
    }
    @media screen and (max-width: 475px){
        flex-direction: column;
        gap: 2rem;
    }
`

export const Logo = styled.div`
    
`

export const ContentCharacters = styled.div`
    & > div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 1.6rem;
    }
    button {
        display: block;
        line-height: 6.5rem;
        background-color: #11B0C8;
        border-radius: 6px;
        width: 30rem;
        margin: 0 auto;
        cursor: pointer;
        border: none;
        font-size: 1.8rem;
        text-transform: uppercase;
        margin-top: 4.8rem;
        transition: filter .3s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`

export const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #040011;
`