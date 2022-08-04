import React, { useState } from 'react';
import { getPokeByName } from '../../utils/apifunctions'
import Spiner from '../Spiner'
import './style.scss'
interface Props {
    search: string | number
}

interface Generic {
    name: string
    url: string
}

interface Types {
    slot: number
    type: Generic
}

interface Stats {
    base_stat: number
    effort: number
    stat: Generic
}


interface Pokemon {
    id: number
    order: number
    name: string
    base_experience: number
    height: number
    weight: number
    types: Types[]
    stats: Stats[]
    sprites: any
    species: Generic[]
    abilities: any
    forms: Generic[]
    game_indices: any
    held_items: any
    moves: any
}


function ListOnePokemon(props: Props) {

    const [pokemon, setPokemon] = useState<Pokemon>()
    getPokeByName(props.search).then(response => {
        setPokemon(response)
    })


    return pokemon ?
        <div className="pokemon">
            <div className="pokemon_foto">
                <img src={pokemon?.sprites.front_default} alt="" />
            </div>
            <div className="pokemon_nome">
                {pokemon?.name}
            </div>
            <div className="pokemon_tipo">
                {pokemon?.types.map(type => {
                    return (<span className={type.type.name}>{type.type.name}<br/></span>)
                })}
            </div>
            <div className="pokemon_preco">
                R$ {(pokemon.id * pokemon.order / 100).toFixed(2).replace('.', ',')}
            </div>
            <button className='pokemon_comprar'>COMPRAR</button>
        </div>
        :
        <div className="pokemon">
            <div className='pokemon_loading'>
                <Spiner />
            </div>
        </div>
}

export default ListOnePokemon;
