import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { NAVIGATION_PATH_NAME } from "shared/consts/navigationPathName";

const Title = styled.h4`
  color: #FFF;
  font-size: 36px;
  font-weight: 700;
  margin-top: 20px;
`;

export const LayoutPathName = () => {
  const location = useLocation();

  const currentPath = NAVIGATION_PATH_NAME.find(
    (path) =>
      path.link.toLowerCase().replace(/\s+/g, "") === location.pathname.toLowerCase().replace(/\s+/g, "")
  )?.title || '';

  return <Title>{currentPath}</Title>;
};
