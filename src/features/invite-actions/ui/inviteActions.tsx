import { acceptInvite, rejectInvite } from 'entities/project/model/storage'
import styled from "@emotion/styled";

const StyledAccept = styled.button`
    background:none;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #65A8FF;
    border:none;
  &:hover {
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const StyledReject = styled.button`
    border:none;
    background:none;
    color: #F88379;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  &:hover {
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

interface InviteActionsProps {
  projectId: string; 
}

export const InviteActions = ({ projectId }: InviteActionsProps) => {
  const handleAccept = () => {
    acceptInvite(projectId); 
  };

  const handleReject = () => {
    rejectInvite(projectId);  
  };

  return (
    <>
        <StyledAccept onClick={handleAccept}>Accept</StyledAccept>
        <StyledReject onClick={handleReject}>Reject</StyledReject>
    </>    
  );
};
