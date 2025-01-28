import styled from "@emotion/styled";
import { FC } from "react";
import dropdownIcon from "shared/assets/icons/dropdown.svg";
import xmark from "shared/assets/icons/xmark.svg";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize: string;
  width?: string;
  sidePadding?: string;
  height?: string;
  isDropdown: boolean;
}

const StyledButton = styled.button<IButtonProps>`
  transition: 0.1s linear;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background-color: ${({ isDropdown }) => isDropdown ? "#30333F" : "#E5E6EE"};
  font-size: ${({ fontSize }) => fontSize || "auto"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  max-height: ${({ height }) => height || "100%"};
  color: ${({ isDropdown }) => isDropdown ? "#E5E6EE" : "#30333F"};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterButton: FC<IButtonProps> = ({ isDropdown, children, ...props }) => {
  return (
    <StyledButton isDropdown={isDropdown} {...props}>
      {children}
      <img src={isDropdown ? dropdownIcon : xmark} alt="icon" />
    </StyledButton>
  );
};
