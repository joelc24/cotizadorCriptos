import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
`

const useSelectMonedas = (label) => {
    const SelectMonenedas = () =>(
        <>
            <Label>{label}</Label>
        </>
    )

    return [ SelectMonenedas ]
}
 
export default useSelectMonedas;