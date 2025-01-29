import styled from "@emotion/styled"
import { SearchInput } from "shared/ui/search-input"
import defaultAvatar from 'shared/assets/icons/defaultAvatar.svg'
import setting from 'shared/assets/icons/Setting.svg'
import notification from 'shared/assets/icons/notification.svg'
import { NavLink } from "react-router-dom"
import { GyberLogoLink } from "shared/ui/gyber-logo-link"


const HeaderWrapper = styled.header`
    height: 80px;
    width: 100%;
    background-color: #2A2C35;
    display: flex;
    align-items: center;
    padding: 0px 46px;
    justify-content: space-between;
    gap: 20px;
    > p {
        flex: auto;
        color: #fff;
        font-size: 16px;
        font-weight: 500;

    }
`

const NavLeft = styled.div`
    display: flex;
    width: 350px;
    justify-content: space-between;
    align-items: center;
`

const NavRight = styled.div`
    display: flex;
    width: 100%;
    max-width: 650px;
    justify-content: space-between;
    align-items: center;
`

const NavIconsContent = styled.div`
    padding-left: 26px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        height: 24px;
        gap: 15px;
        display: flex;
    }
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <NavLeft>
                <GyberLogoLink/>
            </NavLeft>
            <p>Projects</p>
            <NavRight>
                <SearchInput />
                <NavIconsContent>
                    <div>
                        <NavLink to="#">
                            <img src={notification} alt="defaultAvatar" />
                        </NavLink>
                        <NavLink to="#">
                            <img src={setting} alt="defaultAvatar" />
                        </NavLink>
                    </div>
                    <NavLink to="#">
                        <img src={defaultAvatar} alt="defaultAvatar" />
                    </NavLink>
                </NavIconsContent>
            </NavRight>
        </HeaderWrapper>
    )
}