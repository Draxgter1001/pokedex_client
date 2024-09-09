import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';
import PokemonCard from './PokemonCards.jsx';
import Slideshow from './SlideShow.jsx'; 
import axios from 'axios';
import '../styles/HomePage.css'; 

function HomePage() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchPerformed, setSearchPerformed] = useState(false); 
    const [randomPokemonList, setRandomPokemonList] = useState([]); // State for random Pokémon

    const baseUrl = "http://localhost:8080/pokedex"; // Backend URL

    useEffect(() => {
        // Fetch random Pokémon when the component mounts
        const fetchRandomPokemon = async () => {
            try {
                const response = await axios.get(`${baseUrl}/random/10`, { withCredentials: true }); // Fetch 10 random Pokémon
                console.log('Random Pokémon:', response.data); // Debugging log
                setRandomPokemonList(response.data);
            } catch (err) {
                console.error('API Error:', err.response ? err.response.data : err.message);
            }
        };

        fetchRandomPokemon();
    }, []);

    const handleSearch = async (searchTerm, searchBy) => {
        setLoading(true);
        setError(null);
        setSearchPerformed(true); 
        let endpoint;

        // Convert search term to lowercase
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        switch (searchBy) {
            case "name":
                endpoint = `${baseUrl}/name/${lowerCaseSearchTerm}`;
                break;
            case "type":
                endpoint = `${baseUrl}/type/${lowerCaseSearchTerm}`;
                break;
            case "evolution":
                endpoint = `${baseUrl}/evolution/${lowerCaseSearchTerm}`;
                break;
            default:
                endpoint = `${baseUrl}`;
        }

        try {
            const response = await axios.get(endpoint, { withCredentials: true });
            console.log('Search API Response:', response.data); // Debugging log
            setPokemonList(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (err) {
            console.error('API Error:', err.response ? err.response.data : err.message);
            setError(`No Pokémon found`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Logo />
            <SearchBar onSearch={handleSearch} error={error} />
            {loading && <p>Loading...</p>}
            {!searchPerformed ? (
                <Slideshow pokemonList={randomPokemonList} baseUrl={baseUrl} />
            ) : (
                <div className="pokemon-list">
                    {pokemonList.map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} baseUrl={baseUrl} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomePage;