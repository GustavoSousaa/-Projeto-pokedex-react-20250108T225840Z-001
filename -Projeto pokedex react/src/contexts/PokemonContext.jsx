import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext({}) 

/* children vem de um objeto natural do react que é 
passado quando o componente é usado com tag de abertura e fechamento
e representa qualquer tag ou valor filho deste componente */
export const PokemonContextProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([])

    async function captarPokemon() {
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon")
        const dados = await resposta.json()

        const pokemonsData = []

        for(let item of dados.results) {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            const pokemon = await resposta.json()

            pokemonsData.push(pokemon)
        }

        setPokemons(pokemonsData)
    }
    
    useEffect(() => {
        captarPokemon()
    }, [])

    return (
        <PokemonContext.Provider value={{
            pokemons,
            captarPokemon
        }}>
            {children}
        </PokemonContext.Provider>
    )
}