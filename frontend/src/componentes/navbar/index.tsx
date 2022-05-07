import {ReactComponent as Logoregional} from 'recursos/img/logo_regional.svg';
import './estilos.css';

function Navbar(){
    return(
    <header>
      <nav className="container">
        <div className="exames-nav-content">
           
             <h1>Saude Laboratorial Dr. Juarez</h1>
            
             <a href="http://www.labjuarez.com.br">
             <div className='container'>
               <Logoregional />
               <p className="exames-nav-chavao">A mais de 50 anos cuidando de você!</p>
             </div>
          </a>
        </div>
      </nav>
    </header>
      
    );
}

export default Navbar;