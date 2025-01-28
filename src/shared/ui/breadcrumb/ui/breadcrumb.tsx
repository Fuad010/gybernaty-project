import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { NAVIGATION_PATH_NAME } from "shared/consts/navigationPathName";

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #fff;
  font-style: italic;
`;

const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-left: 8px;
  }

  a {
    color: #65A8FF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin-left: 8px;
    color: #fff;
  }
  p {
    margin-left: 15px;
  }

`;

export const Breadcrumb: React.FC = () => {
  const location = useLocation();

  // Разбиваем текущий путь на части
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadcrumbContainer>
      <BreadcrumbItem>
      </BreadcrumbItem>
      {pathnames.map((path, index) => {
        const href = `/${pathnames.slice(0, index + 1).join("/")}`;

        const matchedPath = NAVIGATION_PATH_NAME.find((item) =>
          href.includes(item.link)
        );

        return (
          <BreadcrumbItem key={href}>
            {index === pathnames.length - 1 ? (
                <>
                    <span>{matchedPath?.title || path}</span><p>/</p>

                </>
              
            ) : (
              <>
                <Link to={href}>
                  {matchedPath?.title || path}
                </Link>
                <p>/</p>
              </>
            )}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbContainer>
  );
};
