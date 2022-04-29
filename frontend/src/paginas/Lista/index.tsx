
import axios from 'axios';
import Alfabeto from 'componentes/alfabeto';
import Paginacao from 'componentes/paginacao';
import { useEffect, useState } from 'react';
import { BASE_URL } from 'utilitarios/requests';
import './estilo.css';
import { ExamePage } from 'tipos/exame';
import ExameCard from 'componentes/ExameCard';

function Lista() {

        const [pageNumber, setPageNumber] = useState(0);
        const [letter, setLetter] = useState('');
    
        const [page, setPage] = useState<ExamePage>({ //----><ExamePage> - informando para o typeScript que o tipo do 
            content: [],                                               //- estado é ExamePage(types)
            last: true,
            totalPages: 0,
            totalElements: 0,
            size: 17,
            number: 0,
            first: true,
            numberOfElements: 0,
            empty: true
        })
        //estado para guardar um componente da pagina que foi carregada
    
       
       
        useEffect(() => {
            axios.get(`${BASE_URL}/apiexames/search?searchTerm=${letter}&size=17&page=${pageNumber}`)
            .then(
                response => {
                    const data = response.data as ExamePage; //a constante 'data' recebendo o response.data
                    setPage(data);
                    setPageNumber(0);
                }
            )
        }, [letter ,pageNumber])
       
        
       //setPageNumber(0);
        
    
        
    
        const handleCapturaEventoA = (event: MouseEvent, id: string) => {
            event.preventDefault();
            setLetter(id);
        }


    return (

        <div className="container">
            <div>
                <Alfabeto />
            
                {page.content.map(exame => ( //para cada exame percorrido no array, execute o comando iserido
                <div key={exame.id_exame}>
                    <ExameCard exame={exame} />

                </div>
                
            ))}
            
                <Paginacao />

                
                
            </div>
            

        </div>


    );
}

export default Lista;