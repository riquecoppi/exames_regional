


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'paginas/Lista';
import Form from 'paginas/formulario';

import Navbar from "./componentes/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;