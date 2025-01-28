import { Link } from "react-router-dom";
import { SIDE_BAR_MENU } from "shared/consts/sideBarMenu";
import { Flex } from "shared/emotion-styles/Flex/ui/Flex";
import { Button } from "shared/ui/button/ui/button";
import { SideBarLink } from "shared/ui/side-bar-link";

export const Sidebar = () => {
  return (
    <Flex direction="column" padding="49px" gap="49px" backGroundColor="#30333F" height="100%" width="440px">
          <Link to="/projects/createproject">
            <Button isBold={true} fontSize={"24px"} width={"241px"} borderHave={false} hoverDisable={false} >
              CREATE
            </Button>
          </Link>
      {SIDE_BAR_MENU.map((item, i) => (
        <SideBarLink key={i} link={item.link} disabled={item.disabled}>
          {item.title}
        </SideBarLink>
      ))}
    </Flex>
  );
};