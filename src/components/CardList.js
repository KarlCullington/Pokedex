import React from 'react';
import PokemonThumb from './PokemonThumb';
import '../index.css';

class CardList extends React.Component {
    render() {
        const pokemonArr = this.props.pokemonList.map((onePokemon) => {
            return (
                <PokemonThumb
                    key={onePokemon.id}
                    image={onePokemon.sprites.other.dream_world.front_default}
                    name={onePokemon.name}
                    id={onePokemon.id}
                    height={onePokemon.height}
                    weight={onePokemon.weight}
                    type={onePokemon.types[0].type.name}
                />
            );
        });
        return <div>{pokemonArr}</div>;
    }
}

export default CardList;
