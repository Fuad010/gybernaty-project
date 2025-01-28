import styled from "@emotion/styled"
import { FC } from "react"

interface FlexProps extends React.HTMLAttributes<HTMLDivElement>{
    direction?: string;
    justify?: string
    align?: string
    gap?: string;
    padding?: string;
    width?: string;
    height?: string;
    backGroundColor?: string;
}

const StyledFlex = styled.div<FlexProps>`
    display: flex;
    justify-content: ${({justify}) => justify || 'flex-start'};
    align-items: ${({align}) => align || 'stretch'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0px'};
    padding: ${({padding}) => padding || '0px'};
    width: ${({width}) => width || 'auto'};
    height: ${({height}) => height || 'auto'};
    background-color: ${({backGroundColor}) => backGroundColor || 'transparent'};
`

export const Flex: FC<FlexProps> = (props) =>{
    return <StyledFlex {...props}/>
}