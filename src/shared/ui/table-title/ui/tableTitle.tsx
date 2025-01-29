import styled from "@emotion/styled"
import { FC } from "react"

interface ITableProps {
    gridColumnsCss: string;
    columns: string[];
}

const StyledTable = styled.div<ITableProps>`
    display: grid;
    grid-template-columns: ${({gridColumnsCss}) => gridColumnsCss};
    align-items: center;
    background-color:#30333F;
    height:62px;
    width: 100%;
    border-radius: 10px 10px 0px 0;
    padding: 0 20px;
    text-align: center;  

    & p{
        color: #E5E6EE;
        font-size: 15px;
        font-weight: 600;
    }`

export const TableTitle: FC<ITableProps> = ({gridColumnsCss, columns}) => {
    return (
        <StyledTable gridColumnsCss={gridColumnsCss} columns={[]}>
          <p style={{textAlign:"start"}}>Title</p>
          {columns.map((col, index) => (
            <p key={index}>
              {col}
            </p>
          ))}
          <p>Actions</p>
        </StyledTable>
    )
}