import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn
} from './NavBarElements';
import { Button } from '@material-ui/core';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/'>
                        <FaHome></FaHome>
                    </NavLink>
                    <Button href='/about'>About</Button>
                    <Button href='/annual'>Annual</Button>
                    <Button href='/blogs'>blogs</Button>
                    <Button href='/sign-up'>Sign Up</Button>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <Button href='/signin'>Sign In</Button>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;