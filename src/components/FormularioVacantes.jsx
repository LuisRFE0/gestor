import { useState } from "react"

export const FormularioVacantes = () => {

    const initialForm = {
        nombre: ""
    }

    const [formVacante, setFormVacante] = useState(initialForm);
    const { nombre } = formVacante;

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
            <h1>FormularioVacantes</h1>
            <div className="mt-5">

                <form >
                    <label > Nombre de la vacante</label><br />
                    <input type="text"
                        placeholder={formVacante.nombre}
                        name="nombre"
                        value={nombre}
                        onChange={onInputChange}
                    />

                </form>

            </div>
        </>
    )
}
