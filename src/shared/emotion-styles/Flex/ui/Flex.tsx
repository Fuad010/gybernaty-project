import styled from "@emotion/styled"
import { FC } from "react"

interface IFlexProps extends React.HTMLAttributes<HTMLDivElement>{
    direction?: string;
    justify?: string
    align?: string
    gap?: string;
    padding?: string;
    width?: string;
    height?: string;
    backGroundColor?: string;
    margin?: string;
    border?: string;
    borderRadius?: string;
    borderBottom?: string;
    overflow?: string;
}

const StyledFlex = styled.div<IFlexProps>`
    display: flex;
    justify-content: ${({justify}) => justify || 'flex-start'};
    align-items: ${({align}) => align || 'stretch'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0px'};
    padding: ${({padding}) => padding || '0px'};
    width: ${({width}) => width || 'auto'};
    height: ${({height}) => height || 'auto'};
    background-color: ${({backGroundColor}) => backGroundColor || 'transparent'};
    margin: ${({margin}) => margin || '0'};
    border: ${({border}) => border || 'none'};
    border-radius: ${({borderRadius}) => borderRadius || '0'};
    border-bottom: ${({borderBottom}) => borderBottom || 'none'};
    overflow: ${({overflow}) => overflow || 'visible'};
`

export const Flex: FC<IFlexProps> = (props) =>{
    return <StyledFlex {...props}/>
}