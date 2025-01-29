import styled from "@emotion/styled"
import { FC } from "react";
import invite from 'shared/assets/icons/invite.svg'
import trash from 'shared/assets/icons/trash.svg'
import { Flex } from "shared/emotion-styles/Flex/ui/Flex";

interface ITableRowProps{
    gridColumnsCss:string;
    columns: string[];
}

const StyledTableRow = styled.div<{gridColumnsCss: string}>`
    width:100%; 
    height:46px; 
    border-bottom:1px solid #E5E6EE;
    display: grid;
    grid-template-columns: ${({gridColumnsCss}) => gridColumnsCss};
    align-items: center;
    text-align: center;  
    padding: 0 20px;

    & p{
        color: #E5E6EE;
        font-size: 20px;
        font-weight: 500;
    }`

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
export const TableRow: FC<ITableRowProps> = ({gridColumnsCss, columns}) =>{
    return(
        <StyledTableRow gridColumnsCss={gridColumnsCss} >
           {columns.map((col, index) => (
            <p key={index} style={{ textAlign: index === 0 ? "start" : "center" }}>
              {col}
            </p>
          ))}
          <StyledAction style={{position:"relative"}}>
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
        </StyledTableRow>
    )
}