import styled from "@emotion/styled"
import { FC } from "react"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    isBold: boolean
    fontSize: string
    width?: string
    sidePadding?: string
    height?: string
}

const StyledButton = styled.button<ButtonProps>`
    transition: 0.1s;
    transition-timing-function: linear;
    padding: 10px 14px;
    border-radius: 10px;
    background: #E5E6EE;
    color: #434555;
    font-size: ${({fontSize}) => fontSize || 'auto'};
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height ? "100%" : "auto"};
    max-height: ${({height}) => height || '100%'};
    font-weight: ${({isBold}) => isBold ? "700" : "400"};

    &:hover{
        opacity:0.8;
    }
`

export const Button: FC<ButtonProps> = (props) =>{
    return <StyledButton {...props} />
}