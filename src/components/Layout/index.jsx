/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";


import { useEffect, useState } from "react";
import CardCharacter from "../CardCharacter";

import { ContainerApp, ContentCharacters, HeaderApp, Loader, Logo } from "./styles";


import imageLoader from '../../assets/loader.gif'
import logo from '../../assets/Logo.svg'

const api = 'https://rickandmortyapi.com/api/character?page='

export default function Layout() {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [countPages, setCountPages] = useState()
    const [numberOfCharacters, setNumberOfCharacters] = useState()
    const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {

        axios.get(`${api + page}`)
            .then(response => {

                const array = [...characters, ...response.data.results]
                setCharacters(array)
                setCountPages(response.data.info.pages)
                setNumberOfCharacters(response.data.info.count)
                setIsLoader(false)
            })

    }, [page])

    return (
        <>
            {isLoader && (
                <Loader>
                    <img src={imageLoader} alt="" />
                </Loader>
            )}

            <ContainerApp>
                <HeaderApp>
                    <Logo>
                        <img src={logo} alt="" />
                    </Logo>

                    <span>Number of Characters: {numberOfCharacters}</span>
                </HeaderApp>
                <ContentCharacters>
                    <div>
                        {characters && characters.map(({ id, image, name, gender, species }) => (

                            <CardCharacter
                                key={id}
                                image={image}
                                name={name}
                                gender={gender}
                                species={species}
                            />
                        ))}
                    </div>

                    {
                        (!(page === countPages) && <button onClick={() => setPage(page + 1)}>Carregar mais</button>)
                    }


                </ContentCharacters>
            </ContainerApp>
        </>
    )
}