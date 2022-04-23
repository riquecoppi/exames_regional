
import Alfabeto from 'componentes/alfabeto';
import Paginacao from 'componentes/paginacao';
import './estilo.css';

function Lista() {



    return (

        <div className="container">
            <div>
                <Alfabeto />
                <Paginacao />
                
            </div>


        </div>


    );
}

export default Lista;