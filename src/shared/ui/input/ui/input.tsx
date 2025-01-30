import styled from "@emotion/styled"
import { FC } from "react"

interface Props{
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

const StyledInput = styled.input`
    background-color: #30333F;
    height: 42px;
    width: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    color: #E5E6EE;
    font-size: 14px;
    font-weight: 700;
    border-color: rgba(1,1,1,0);
    outline: none;
    transition: 0.1s linear;
    position: relative;

    &::placeholder {
        color: #8E919D;
        font-size: 16px;
        font-weight: 700;
    }

    &:focus{
    border-color: rgba(1,1,1,1);

    &[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
    }}` 

export const Input: FC<Props> = ({ placeholder, value, onChange }) => {
    return <StyledInput placeholder={placeholder} value={value} onChange={onChange} />;
  };