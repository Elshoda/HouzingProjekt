import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {ReactComponent as logoImg} from '../../assets/icon/logo.svg'

const center =css`
    display: flex;
    align-items: center;
`

export const Container=styled.div`
    /* ${center}
    flex-direction: column;
     */
    
`
export const Wrapper=styled.div`
    /* max-width: 100%; */
    background:var(--colorPrimary) ;
    color: #fff;
    padding: var(--padding);
    height: 64px;
    font-size:16px ;
    ${center}
    justify-content: space-around;
`

export const Section=styled.div`
    display: ${({d})=>d} !important;
    align-items: center;
    cursor:${({c})=>c} !important;
    font-weight: ${({fw})=>fw};
    .active{
        transition: 0.3s;
        color: red;
    }
`
export const Logo=styled(logoImg)`
    width:30px;
    margin-right: 10px;

    & path{
        fill: #fff;
        stroke: #fff;
    }
`
export const Link=styled(NavLink)`
    text-decoration: none;
    color: #ffff;
    padding: 0 30px;
    
`