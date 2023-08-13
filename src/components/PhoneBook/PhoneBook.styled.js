import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from 'formik';


export const StyledTitle = styled.h1`
margin-left: 10px;
`
export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 15px;
padding: 10px;
`

export const StyledField = styled(Field)`
padding: 4px;
width: 100px;
`

export const StyledButton = styled.button`
padding: 4px;
width: 100px;
`
export const StyledError = styled(ErrorMessage)`
color: red;
font-size: 14px;
`