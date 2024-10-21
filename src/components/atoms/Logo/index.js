import React from 'react';
import { StyledLogoImage } from './styles'
import logoImage from '../../../../assets/LogoEmpire.png' 


export const Logo = () => {
    return (
        <StyledLogoImage source={logoImage}/>
    )
}
