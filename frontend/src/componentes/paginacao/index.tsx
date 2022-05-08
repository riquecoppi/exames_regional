import './estilo.css';
import {ReactComponent as Arrow} from 'recursos/img/flexa.svg';
import { ExamePage } from 'tipos/exame';

 type Props = {
     page: ExamePage;
     onChange : Function;
 }

function Paginacao ({page, onChange} : Props) {
    return(
        <div className="dsmovie-pagination-container">
        <div className="dsmovie-pagination-box">

            <button className="dsmovie-pagination-button" 
            disabled={page.first} 
            onClick={() => onChange(page.number - 1)} >
                <Arrow />
            </button>

            <p>{`${page.number+1} de ${page.totalPages}`}</p>

            <button className="dsmovie-pagination-button" 
            disabled={page.last} 
            onClick={() => onChange(page.number + 1)}>
                <Arrow className="dsmovie-flip-horizontal" />
            </button>
            
        </div>
    </div>
    );
}

export default Paginacao;