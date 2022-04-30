
import './estilo.css';
import { Exame } from '../../tipos/exame';
import { Link } from 'react-router-dom';


type Props ={
    exame: Exame;
}


function ExameCard ( { exame } : Props ) {
   
    

    
    
    return(
        
         <div>
                 <Link to={`/form/${exame.id_exame}`}>
                 <div className="default-exame">
                    
                    <h3>{exame.nome}</h3>
                    <div className='linha-exame'></div>
                 </div>       
                 </Link>    
              
         </div>
               
        
        
        
    )
}

export default ExameCard;