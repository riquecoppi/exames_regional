
import './estilo.css';
function ExameCard() {


    const exame = {
        id: 1,
        nomeExame: "Hemograma CARD",
        coleta: "A coleta é realizada atraves do X procedimento.",
        interpretacao: "O exame revela tais e tais condições de saude do paciente."
    };
    
    return(
        <div className="container">
             <div className="exame-form-nome">
               <h1>{exame.nomeExame}</h1>
             </div>
         <h2>Coleta</h2>
         <p>{exame.coleta}</p>
         <h2>Interpretação</h2>
         <p>{exame.interpretacao}</p>
         </div>
    );

}

export default ExameCard;