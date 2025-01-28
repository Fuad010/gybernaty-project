import styled from "@emotion/styled"
import { FC } from "react"
import { Flex } from "shared/emotion-styles/Flex/ui/Flex"

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
    }
`

export const Table: FC<ITableProps> = ({ gridColumnsCss, columns }) => {
    return (
      <Flex
        borderRadius="15px"
        border="2.5px solid #30333F"
        margin="20px 0 0 0"
        height="calc(100% - 170px)"
        width="100%"
      >
        <StyledTable gridColumnsCss={gridColumnsCss} columns={[]}>
          {columns.map((col, index) => (
            <p key={index} style={{ textAlign: index === 0 ? "start" : "center" }}>
              {col}
            </p>
          ))}
        </StyledTable>
      </Flex>
    );
  };