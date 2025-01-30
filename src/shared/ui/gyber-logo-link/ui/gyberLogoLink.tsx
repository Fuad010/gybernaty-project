import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from '@emotion/styled'
import gyberLogo from 'shared/assets/icons/gyberLogo.svg'

const StyledNavLink = styled(RouterNavLink)`
    display: flex;
    align-items: center;
    gap: 15px;
    > h1 {
        color: #fff;
        font-size: 20px;
    }
`

export const GyberLogoLink = () => {
    return (
        <StyledNavLink to='/projects'>
            <img src={gyberLogo} alt='logo' />
            <h1>Gyber Projects</h1>
        </StyledNavLink>
    )
}