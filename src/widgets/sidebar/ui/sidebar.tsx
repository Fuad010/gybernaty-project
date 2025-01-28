import { SIDE_BAR_MENU } from "shared/consts/sideBarMenu";
import { Flex } from "shared/emotion-styles/Flex/ui/Flex";
import { Button } from "shared/ui/button/ui/button";
import { SideBarLink } from "shared/ui/side-bar-link";

export const Sidebar = () => {
  return (
    <Flex direction="column" padding="49px" gap="49px" backGroundColor="#30333F" height="calc(100% - 80px)" width="440px">
      <Button isBold={true} fontSize={"24px"} width={"241px"} height="">
        CREATE
      </Button>
      {SIDE_BAR_MENU.map((item) => (
        <SideBarLink key={item.link} link={item.link}>
          {item.title}
        </SideBarLink>
      ))}
    </Flex>
  );
};