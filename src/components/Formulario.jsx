import styled from "@emotion/styled";
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: I#FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
    }
`
const Formulario = () => {

    

    const [ SelectMonenedas ] = useSelectMonedas('Elige Tu moneda', monedas)
    

    

    return ( 
        <form >
            <SelectMonenedas/>
            <InputSubmit
                type="submit" 
                value="Cotizar"
            />
            
        </form>
     );
}
 
export default Formulario;