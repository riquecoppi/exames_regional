


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'paginas/Lista';
import Form from 'paginas/formulario';
import ApresentaCard from 'paginas/apresentaExame';

import Navbar from "./componentes/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Listing />} />
        
        <Route path="/form">
          <Route path=":exameLetra" element={<Form />} />
        </Route>

        <Route path="/form/apresenta">
            <Route path=":exameId" element={<ApresentaCard/>}/>
        </Route>  

      </Routes>
    </BrowserRouter>
  );
}

export default App;