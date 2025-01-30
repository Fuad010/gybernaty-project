import styled from "@emotion/styled"
import { FC } from "react"

interface Props{
    value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const StyledSelect = styled.select`
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
    resize: none;
    &::placeholder {
        color: #8E919D;
        font-size: 16px;
        font-weight: 700;
    }
    &:focus{
    border-color: rgba(1,1,1,1);
}`

export const SelectOption: FC<Props> = ({ value, onChange, options }) => {
    return (
      <StyledSelect value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    );
  };