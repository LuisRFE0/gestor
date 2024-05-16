
export const VacantesPostuladas = () => {
    return (
        <>
            <h4>Vacantes postuladas</h4>

            <table className="table table-hover table-striped">

                <thead><tr>
                    <th>#</th>
                    <th>Vacante</th>
                    <th>Fecha</th>

                    <th>Salario</th>
                    <th>eliminar</th>

                </tr></thead>

                <tbody>
                    <tr key="1">
                        <td>1</td>
                        <td>Desarrollador jr</td>
                        <td>15/05/2024</td>
                        <td>12000</td>
                        <td><button className="btn btn-danger">eliminar</button></td>


                    </tr>
                </tbody>
            </table>
        </>


    )
}
