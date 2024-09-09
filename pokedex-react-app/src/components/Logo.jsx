import pokemonSvg from "../assets/pokemon-23.svg"
import "../styles/Logo.css"

function Logo() {
    return (
        <div className="main">
            <div className="logo-setting">
                <img 
                    src={pokemonSvg} 
                    alt="Pokemon" 
                    onClick={() => window.location.reload()} 
                    style={{ cursor: 'pointer' }} 
                />
            </div>
        </div>
    )
}

export default Logo