import axios from 'axios';
import { useEffect, useState } from 'react';
import { Exame } from 'tipos/exame';
import { BASE_URL } from 'utilitarios/requests';
import './estilo.css';

type Props ={
  exameId: string;
}

function FormCard ( {exameId} : Props ) {

  const [exame, setExame] = useState<Exame>();

  useEffect (() => {
    axios.get(`${BASE_URL}/regional/${exameId}`)
         .then(response => {
              setExame(response.data);
         });
  },[exameId])

  return(
            

        <div> 
            <div className="container">
                <h3>{exame?.nome}</h3>
                <h2>Coleta</h2>
                <h4>{exame?.coleta}</h4>
                <h2>Interpretação</h2>
                <h4>{exame?.interpretacao}</h4>        
            </div> 

         
         
        </div>

         
    );
}

export default FormCard;