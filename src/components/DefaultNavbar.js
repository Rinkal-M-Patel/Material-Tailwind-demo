import { useState } from "react";
import { Link } from "react-router-dom";
import  Navbar  from "@material-tailwind/react/Navbar";
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from "@material-tailwind/react/Icon";


export default function DefaultNavbar(){
    const [openNavbar, setOpenNavbar] = useState(false);

    return(
            <Navbar color="tarnsparent" Navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a href="/" target="_blank" rel="noreferrer">
                    <NavbarBrand>Material Tailwind</NavbarBrand>
                    </a>
                    <NavbarToggler
                        color="white"
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:item-center">
                            <NavLink
                                href="/" 
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                            <Icon name="description" size="2xl" />
                            &nbsp;Docs
                            </NavLink>
                            <NavLink
                                href="/" 
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                            <Icon name="apps" size="2xl" />
                            &nbsp;components
                            </NavLink>
                            <div className="text-white">
                            <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Templates
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/" >
                                        <DropdownItem color="lightBlue">
                                            Landing
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/" >
                                        <DropdownItem color="lightBlue">
                                            Profile
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/" >
                                        <DropdownItem color="lightBlue">
                                            Login
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/" >
                                        <DropdownItem color="lightBlue">
                                            Register
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                            <NavLink
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    size="xl"
                                />
                                &nbsp;Github
                            </NavLink>
                            <NavLink
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Issues
                            </NavLink>
                          
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}