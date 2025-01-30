import { useUnit } from "effector-react";
import { $projects } from "entities/project/model/storage";
import styled from "@emotion/styled";
import { TableTitle } from "shared/ui/table-title";
import { TableRowInvite } from "entities/project/table-row-invite";
import { Link } from "react-router-dom";

const StyledTableWrapper = styled.div`
  border-radius: 15px;
  border: 2.5px solid #30333F;
  margin: 20px 0 0 0;
  height: calc(100% - 220px);
  width: 100%;
  overflow: hidden;
`;

const Empty = styled.div`
   margin-top:90px;
   color: #FFF;
   font-size: 20px;
   text-align: center;
   font-weight: 500;
  & a{
    color: #65A8FF;
    text-decoration: underline;
    &:hover{
      opacity:0.8;
    }
  }
  
`;

export const InvitesWrapper = () => {
  const projects = useUnit($projects);

  const invitedProjects = projects.filter((project) => project.isInvited === true);

  return (
    <StyledTableWrapper>
      <TableTitle 
        gridColumnsCss={"6fr 4fr 4fr"} 
        columns={[ 
          'Lead', 
        ]}
      />
      {invitedProjects.length === 0 ? (
        <Empty style={{ padding: "20px", textAlign: "center", color: "#FFF" }}>
          <span>You have no invites jet.</span> <Link to='/projects'>Go to projects</Link>
        </Empty>
      ) : (
      <div style={{ overflow: "auto", paddingBottom: "30px", height: "100%" }}>
        {invitedProjects.map((project) => (
          <div key={project.id}>
            <TableRowInvite project={project} />
          </div>
        ))}
      </div>
      )}
    </StyledTableWrapper>
  );
};
