import { ISideBarMenuType } from "shared/types/sideBarMenuTypes";

export const SIDE_BAR_MENU: ISideBarMenuType[] = [
    { title: 'Projects', link: '/projects' },
    { title: 'Invites', link: '/invites' },
    { title: 'Users', link: '/#', disabled: true },
    { title: 'Teams', link: '/#', disabled: true },
]