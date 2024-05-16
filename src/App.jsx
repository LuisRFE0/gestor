import { FormularioVacantes } from "./components/FormularioVacantes"
import { VacantesPostuladas } from "./components/VacantesPostuladas"
import { Navbar } from "./layouts/Navbar"


function App() {


  return (
    <>
      <Navbar />
      <h3 className="text-center my-3">Gestor de vacantes postuladas</h3>
      <hr />
      <div className="row" >
        <div className="col text-center">
          <FormularioVacantes />
        </div>
        <div className="col text-center">
          <VacantesPostuladas />
        </div>

      </div>
    </>

  )
}

export default App
