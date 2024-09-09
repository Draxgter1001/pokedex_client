import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PokemonCard from './PokemonCards.jsx';
import '../styles/Slideshow.css';

const Slideshow = ({ pokemonList, baseUrl }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="slideshow-container"> 
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={0}  
                infinite={true}
                arrows={false}
                showDots={false}
                transitionDuration={5000} 
                customTransition="transform 5000ms linear" 
                draggable={false}
                containerClass="carousel-container" // Add this line
            >
                {pokemonList.map((pokemon) => (
                    <div key={pokemon.name}>
                        <PokemonCard pokemon={pokemon} baseUrl={baseUrl} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slideshow;