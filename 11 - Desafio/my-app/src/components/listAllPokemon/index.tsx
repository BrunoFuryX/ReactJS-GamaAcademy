import React, { useState } from 'react';
import { getAllPoke } from '../../utils/apifunctions'
import ListOnePokemon from '../listOnePokemon';
import './style.scss'

interface Props {
    limit: string | number
    search: string | undefined
}

interface Pokemons {
    count: number
    next: string | null
    previous: string | null
    results: Pokemon[]
}

interface Pokemon {
    name: string
    url: string
}


function ListAllPokemon(props: Props) {

    const [page, setPage] = useState<number>(0)


    const [pokemons, setPokemons] = useState<Pokemons>()
    getAllPoke((Number(props.limit) * (page + 1)), 0).then(response => {
        setPokemons(response)
    })


    return (
        <div className="shelf">
            <p>Exibindo {(Number(props.limit) * (page + 1))} de {pokemons?.count}</p>
            <div className='shelf_list'>
                {pokemons?.results.map((pokemon: Pokemon) => (
                    <ListOnePokemon search={pokemon.name} />
                ))}
            </div>
            <button
                onClick={e => setPage(page + 1)}
                disabled={pokemons?.next == null}
                className='see-more'
            >
                Ver mais
            </button>
        </div>
    );
}

export default ListAllPokemon;
