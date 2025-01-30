import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface ITableRowProps {
  gridColumnsCss: string;
  columns: (string | ReactNode)[];
  actions?: ReactNode;
}

const StyledTableRow = styled.div<{ gridColumnsCss: string }>`
  width: 100%;
  min-height: 46px; 
  border-bottom: 1px solid #E5E6EE;
  display: grid;
  grid-template-columns: ${({ gridColumnsCss }) => gridColumnsCss};
  align-items: center;
  text-align: center;
  padding: 0 20px;

  & p {
    color: #E5E6EE;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const TableRow: FC<ITableRowProps> = ({ gridColumnsCss, columns, actions }) => {
  return (
    <StyledTableRow gridColumnsCss={gridColumnsCss}>
      {columns.map((col, index) => (
        <div key={index} style={{ textAlign: index === 0 ? "start" : "center" }}>
          {typeof col === "string" && ["TO DO", "IN PROGRESS", "DONE"].includes(col) ? 
          <p style={{
            backgroundColor:"#E5E6EE", 
            borderRadius:"15px", 
            color:"#434555", 
            padding:"0 10px",
            display:"inline-flex", 
            alignItems:"center",
            justifyContent:"center",
            height:"30px"
            }}>{col}</p> : <p>{col}</p>}
        </div>
      ))}
      {actions && <div>{actions}</div>}
    </StyledTableRow>
  );
};
