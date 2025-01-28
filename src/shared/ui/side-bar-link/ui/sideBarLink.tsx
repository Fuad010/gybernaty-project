import styled from "@emotion/styled";
import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface ISideBarLinkProps {
  link: string;
  disabled?: boolean
  children: string;
}

const StyledLink = styled.div<{ isActive: boolean }>`
  display: flex;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  position: relative;
  transition: 0.2s !important;
  transition-timing-function: linear !important;
  align-self: baseline;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 5px solid #d9d9d9;
    border-radius: 10px;
    display: block;
    width: 0%;
    border-color: #d9d9d9;
    margin-top: 2px;
    transition: 0.2s;
    transition-timing-function: linear;
    bottom: -9px;
  }

  &:hover::after {
    width: 100%;
    border-color: #fff;
  }

  ${({ isActive }) =>
    isActive &&
    `
      &::after {
        width: 100%;
        border-color: #fff;
      }
  `}
`;

export const SideBarLink: FC<ISideBarLinkProps> = ({ link, children, disabled }) => {
  const location = useLocation();
  const isPartiallyActive = location.pathname.includes(link);
  
  return (
    !disabled ? (
      <NavLink to={link} end>
        {({ isActive }) => (
          <StyledLink isActive={isActive || isPartiallyActive}>
            {children}
          </StyledLink>
        )}
      </NavLink>
    ) : (
        <StyledLink isActive={false} >
          {children}
        </StyledLink>
    )
  );
};