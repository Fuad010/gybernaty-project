import styled from "@emotion/styled"
import { FC } from "react"

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    isBold?: boolean
    fontSize: string
    width?: string
    sidePadding?: string
    height?: string
    borderHave?: boolean
    hoverDisable?: boolean
}

const StyledButton = styled.button<IButtonProps>`
    transition: 0.1s;
    transition-timing-function: linear;
    padding: 10px 14px;
    padding-left: ${({sidePadding}) => sidePadding || '14px'};
    padding-right: ${({sidePadding}) => sidePadding || '14px'};
    border-radius: 10px;
    background: ${({borderHave}) => borderHave ? "none" : "#E5E6EE"};
    font-size: ${({fontSize}) => fontSize || 'auto'};
    min-width: ${({width}) => width || 'auto'};
    height: ${({height}) => height ? "100%" : "auto"};
    max-height: ${({height}) => height || '100%'};
    font-weight: ${({isBold}) => isBold ? "700" : "400"};
    border: ${({borderHave}) => borderHave ? "1.5px solid #E5E6EE" : "none"};
    color: ${({borderHave}) => borderHave ? "#E5E6EE" : "#30333F"};

    &:hover{
        opacity: ${({hoverDisable}) => hoverDisable ? "1" : "0.8"};
    }
`

export const Button: FC<IButtonProps> = (props) =>{
    return <StyledButton {...props} />
}