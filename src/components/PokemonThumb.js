import React from 'react';

const PokemonThumb = ({ name, image, id, height, weight, type, _callback }) => {
    let pokeH = (height * 0.1).toFixed(2);
    let pokeW = (weight * 0.1).toFixed(2);

    const style = type + ' thumb-container';

    return (
        <div className='inline-flex'>
            <div className={style}>
                <div className='number'>
                    <small>#0{id}</small>
                </div>
                <div className='img-container'>
                    <img className='pokemonSort' src={image} alt={name} />
                </div>
                <div className='detail-wrapper'>
                    <h3 className='ttc'>{name}</h3>
                    <small>Type: {type}</small>
                    <small>Height (meters): {pokeH}</small>
                    <small>Weight (kg): {pokeW}</small>
                </div>
            </div>
        </div>
    );
};

export default PokemonThumb;
