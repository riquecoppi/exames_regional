
import FormCard from 'componentes/formCard';
import { useParams } from 'react-router-dom';





function Formulario () {

  const params = useParams();
  

  return(
            
       <div>

         
         <FormCard exameId={`${params.exameLetra}`} />
         
       </div> 

           
    );
}

export default Formulario;