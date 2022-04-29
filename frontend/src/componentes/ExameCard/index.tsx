
import './estilo.css';
import { Exame } from '../../tipos/exame';


type Props ={
    exame: Exame;
}


function ExameCard ( { exame } : Props ) {
   
    

    
    
    return(
        
         <div>
            
                <div className="default-exame">
                    
                   <h3><a href="w">{exame.nome}</a></h3>
                   <div className='linha-exame'></div>
                </div>

                 
              
         </div>
               
        
        
        
    )
}

export default ExameCard;