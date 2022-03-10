import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
`

const useSelectMonedas = (label, opciones) => {
    const SelectMonenedas = () =>(
        <>
            <Label>{label}</Label>
            <select>
                <option value="">Seleccione</option>

                {opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ) )}
            </select>
        </>
    )

    return [ SelectMonenedas ]
}
 
export default useSelectMonedas;