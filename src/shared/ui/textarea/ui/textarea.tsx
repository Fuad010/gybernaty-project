import styled from "@emotion/styled"
import { FC } from "react"

interface Props{
    placeholder:string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledTextarea = styled.textarea`
    background-color: #30333F;
    height: 163px;
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    color: #E5E6EE;
    font-size: 14px;    
    font-weight: 700;
    border-color: rgba(1,1,1,0);
    outline: none;
    transition: 0.1s linear;
    resize: none;
    &::placeholder {
        color: #8E919D;
        font-size: 16px;
        font-weight: 700;
    }
    &:focus{
    border-color: rgba(1,1,1,1);
}` 

export const Textarea: FC<Props> = ({placeholder, value, onChange}) => {
    return (
        <StyledTextarea placeholder={placeholder} value={value} onChange={onChange}/>
    )
}