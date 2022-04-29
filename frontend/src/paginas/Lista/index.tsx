
import axios from 'axios';
import Alfabeto from 'componentes/alfabeto';
import Paginacao from 'componentes/paginacao';
import { useEffect, useState, MouseEvent } from 'react';
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

        <div className="retangulo-lista">
           
        <h1>Exames</h1>
        <div className='lista-linha'>
        </div>
        <div className='lista-alfabeto'>
            <p className='letra-alfabeto'>
                
                <table>
                    <tr>
                        <td> <a href="A" id='A' onClick={(e) => handleCapturaEventoA(e, 'A') }>A</a></td>
                        <td> <a href="B" id='B' onClick={(e) => handleCapturaEventoA(e, 'B') }>B</a></td>
                        <td> <a href="C" id='C' onClick={(e) => handleCapturaEventoA(e, 'C') }>C</a></td>
                        <td> <a href="D" id='D' onClick={(e) => handleCapturaEventoA(e, 'D') }>D</a></td>
                        <td> <a href="E" id='E' onClick={(e) => handleCapturaEventoA(e, 'E') }>E</a></td>
                        <td> <a href="F" id='F' onClick={(e) => handleCapturaEventoA(e, 'F') }>F</a></td>
                        <td> <a href="G" id='G' onClick={(e) => handleCapturaEventoA(e, 'G') }>G</a></td>
                        <td> <a href="H" id='H' onClick={(e) => handleCapturaEventoA(e, 'H') }>H</a></td>
                        <td> <a href="I" id='I' onClick={(e) => handleCapturaEventoA(e, 'I') }>I</a></td>
                        <td> <a href="J" id='J' onClick={(e) => handleCapturaEventoA(e, 'J') }>J</a></td>
                        <td> <a href="K" id='K' onClick={(e) => handleCapturaEventoA(e, 'K') }>K</a></td>
                        <td> <a href="L" id='L' onClick={(e) => handleCapturaEventoA(e, 'L') }>L</a></td>
                        <td> <a href="M" id='M' onClick={(e) => handleCapturaEventoA(e, 'M') }>M</a></td>
                        <td> <a href="N" id='N' onClick={(e) => handleCapturaEventoA(e, 'N') }>N</a></td>
                        <td> <a href="O" id='O' onClick={(e) => handleCapturaEventoA(e, 'O') }>O</a></td>
                        <td> <a href="P" id='P' onClick={(e) => handleCapturaEventoA(e, 'P') }>P</a></td>
                        <td> <a href="Q" id='Q' onClick={(e) => handleCapturaEventoA(e, 'Q') }>Q</a></td>
                        <td> <a href="R" id='R' onClick={(e) => handleCapturaEventoA(e, 'R') }>R</a></td>
                        <td> <a href="S" id='S' onClick={(e) => handleCapturaEventoA(e, 'S') }>S</a></td>
                        <td> <a href="T" id='T' onClick={(e) => handleCapturaEventoA(e, 'T') }>T</a></td>
                        <td> <a href="U" id='U' onClick={(e) => handleCapturaEventoA(e, 'U') }>U</a></td>
                        <td> <a href="V" id='V' onClick={(e) => handleCapturaEventoA(e, 'V') }>V</a></td>
                        <td> <a href="W" id='W' onClick={(e) => handleCapturaEventoA(e, 'W') }>W</a></td>
                        <td> <a href="X" id='X' onClick={(e) => handleCapturaEventoA(e, 'X') }>X</a></td>
                        <td> <a href="Y" id='Y' onClick={(e) => handleCapturaEventoA(e, 'Y') }>Y</a></td>
                        <td> <a href="Z" id='Z' onClick={(e) => handleCapturaEventoA(e, 'Z') }>Z</a></td>
                    </tr>
                    
                    
                </table>
            </p>
        </div>

         {page.content.map(exame => ( //para cada exame percorrido no array, execute o comando iserido
             <div key={exame.id_exame}>
                 <ExameCard exame={exame} />

             </div>
             
         ))}

        <Paginacao />
    </div>
    );
}

export default Lista;