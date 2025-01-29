import styled from "@emotion/styled";
import { FC } from "react";
import invite from "shared/assets/icons/invite.svg";
import trash from "shared/assets/icons/trash.svg";
import { Flex } from "shared/emotion-styles/Flex/ui/Flex";

const StyledAction = styled.button`
  width: 30px;
  background: none;
  border: none;
  justify-self: center;
  color: #E5E6EE;
  position: relative;

  &:hover > div {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    transition: opacity 0.2s linear, transform 0.2s linear;
  }

  & > div {
    opacity: 0;
    visibility: hidden;
    width: 130px;
    background-color: #E5E6EE;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    right: 0;
    overflow: hidden;
    transform: translateY(-5px);
    transition: opacity 0.2s linear, transform 0.2s linear;
    z-index: 5;

    & p {
      color: #30333F;
      font-family: Inter;
      font-size: 15px;
      font-weight: 400;
    }

    & > div:hover {
      background-color: rgba(1, 1, 1, 0.2);
    }
  }
`;

export const ActionsMenu: FC = () => {
  return (
    <StyledAction>
      <p>⋮</p>
      <div>
        <Flex gap="7px" padding="10px">
          <img src={invite} alt="invite" />
          <p>Пригласить</p>
        </Flex>
        <Flex gap="7px" padding="10px">
          <img src={trash} alt="trash" />
          <p>Удалить</p>
        </Flex>
      </div>
    </StyledAction>
  );
};