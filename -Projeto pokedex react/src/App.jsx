import './App.css'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PokemonContext } from './contexts/PokemonContext'

export function App() {
  const { pokemons } = useContext(PokemonContext)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  
  function searchPokemon(pokemon) {
    return pokemon.name.includes(search)
  }
  console.log(pokemons);

  return (
    <>
      <input onChange={(e) => setSearch(e.target.value)} />

      {pokemons.filter(searchPokemon).map(pokemon => (
        <h1 
          onClick={() => navigate(`/${pokemon.name}`)} 
          key={pokemon.name}
          >
            {pokemon.name}
        </h1>
      ))}
    </>
  )
}

export function Detalhes() {
  const { nome } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const nomeContexto = useContext(PokemonContext)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then(res => res.json())
    .then(dado => {
      setPokemon(dado)
      setIsLoading(false)
    })
    .catch(e => console.log(e))
  }, [])

  return (
    <>
      {nomeContexto}
      {pokemon.sprites && <img src={pokemon.sprites.front_default} />}
    </>
  )
}
