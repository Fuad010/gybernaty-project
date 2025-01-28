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

  // Приводим пути к нижнему регистру и удаляем пробелы в title и link
  const currentPath = NAVIGATION_PATH_NAME.find(
    (path) =>
      path.link.toLowerCase().replace(/\s+/g, "") === location.pathname.toLowerCase().replace(/\s+/g, "")
  )?.title || ''; // Если не найдено, возвращаем пустую строку

  return <Title>{currentPath}</Title>;
};
