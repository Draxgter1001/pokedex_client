import React from 'react';
import '../styles/PokemonCard.css';

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
    // Add more types as needed
};

const PokemonCard = ({ pokemon, baseUrl }) => {
    const typeColor = typeColors[pokemon.pokemon_type1.toLowerCase()] || '#A8A77A';
    const pokemonOfficialUrl = 'https://www.pokemon.com/uk/pokedex/${pokemon.name.toLowerCase()}';

    return (
        <a href={pokemonOfficialUrl} target='_blank' rel="noopener noreferrer">
            <div className="pokemon-card" style={{ backgroundColor: typeColor }}>
                <img
                    src={`${baseUrl}/images/${pokemon.name.toLowerCase()}`}
                    alt={pokemon.name}
                    className="pokemon-image"
                />
                <div className="pokemon-details">
                    <h3>{pokemon.name}</h3>
                    <p>Type: {pokemon.pokemon_type1} {pokemon.pokemon_type2 ? `/ ${pokemon.pokemon_type2}` : ''}</p>
                    <p>Evolution: {pokemon.pokemon_evolution}</p>
                </div>
            </div>
        </a>
        
    );
};

export default PokemonCard;