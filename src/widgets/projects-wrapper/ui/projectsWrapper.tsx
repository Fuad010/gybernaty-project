import { useUnit } from "effector-react";
import { $projects } from "entities/project/model/storage";
import styled from "@emotion/styled";
import { TableRowProject } from "entities/project/table-row-project";
import { TableTitle } from "shared/ui/table-title";
const StyledTableWrapper = styled.div`
  border-radius:15px;
  border:2.5px solid #30333F;
  margin:20px 0 0 0;
  height:calc(100% - 220px);
  width:100%;
  overflow:hidden;
`

export const ProjectsWrapper = () => {
  const projects = useUnit($projects)
      
  return (
        <StyledTableWrapper
        >
          <TableTitle 
            gridColumnsCss={"4fr 1fr 0.5fr 1.5fr 1.5fr 0.5fr"} 
            columns=
            {[
                'Status', 
                'Priority', 
                'Lead', 
                'Target date', 
            ]}/>
          <div style={{overflow:"auto", paddingBottom:"30px", height:"100%"}}>

             {projects.map((project) => (
              <TableRowProject key={project.id} project={project} />
            ))}
          </div>
        </StyledTableWrapper>
    );
  };