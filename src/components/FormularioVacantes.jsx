import { useState } from "react"

export const FormularioVacantes = () => {

    const initialForm = {
        nombre: "",
        fecha: obtenerFechaConFormato()
    }

    function obtenerFechaConFormato() {
        const fechaActual = new Date();

        // Obteniendo día, mes y año
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
        const año = fechaActual.getFullYear() % 100; // Obteniendo los últimos dos dígitos del año

        // Ajustando el formato dd/mm/aa
        const diaFormateado = dia < 10 ? '0' + dia : dia;
        const mesFormateado = mes < 10 ? '0' + mes : mes;
        const añoFormateado = año < 10 ? '0' + año : año;

        return `${diaFormateado}/${mesFormateado}/${añoFormateado}`;
    }


    const [formVacante, setFormVacante] = useState(initialForm);
    const { nombre, fecha } = formVacante;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormVacante({
            ...formVacante,
            [name]: value,
        })

    }

    console.log(formVacante);
    return (
        <>
            <h2>FormularioVacantes</h2>
            <div className="mt-5">

                <form >
                    <div className="form-vacantes">
                        <label className="" > Nombre de la vacante</label>
                        <input className="form-control mx-5 input-tamanio " type="text"
                            placeholder={formVacante.nombre}
                            name="nombre"
                            value={nombre}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="form-vacantes">
                        <label className="form-label my-1" > Fecha de postulación</label>
                        <input className="form-control mx-5 text-center input-tamanio " type="text"
                            placeholder={formVacante.fecha}
                            name="fecha"
                            value={fecha}
                            onChange={onInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary my-5"> Registrar</button>
                </form>

            </div>
        </>
    )
}
