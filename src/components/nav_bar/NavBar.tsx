
import * as React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spiral as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react";

const MainNavBar = styled(Navbar)`
    z-index: 1;
    color: charcoal;
`

const MainNav = styled(Nav)`
    /* height: 2rem; */
    /* display: flex; */
    /* align-items: center; */
    font-weight: bold;

    @media (max-width: 767px) {
        backdrop-filter: blur(30px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px;
        width: 15rem;
        border-radius: 1.5rem;
        margin-left: .5rem;
        padding: .5rem;
        font-size: 1.5rem;
    }

`

const MainLink = styled(Nav.Link)`
    margin: 0rem 1.5rem;
    color: white;
`

const HamburgerMenu = styled(Hamburger)`
   
    
`

const KNavBar = ({
    scheduleLink,
    lodgingLink,
    thingsLink,
    registryLink,
}: {
    scheduleLink: () => any,
    lodgingLink: () => any,
    thingsLink: () => any,
    registryLink: () => any,
}) => {

    const [expanded, setExpanded] = useState(false);
    const [width, setWidth] = useState(0)

    console.log('QQQQ width', width);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <MainNavBar collapseOnSelect expand='md' expanded={expanded}>
            {width < 768 ?
                <div style={{ marginLeft: '1rem' }}>
                    <HamburgerMenu toggled={expanded} onToggle={() => setExpanded(!expanded)} rounded={true} />
                </div>
                :
                <div />
            }
            <Navbar.Collapse id="basic-navbar-nav">
                <MainNav className="me-auto">
                    <MainLink onClick={() => {
                        setExpanded(false)
                        scheduleLink();
                    }}>Schedule</MainLink>
                    <MainLink onClick={() => {
                        setExpanded(false)
                        lodgingLink();
                    }}>Lodging</MainLink>
                    <MainLink onClick={() => {
                        setExpanded(false)
                        thingsLink()
                    }}>Things To Do</MainLink>
                    <MainLink onClick={() => {
                        setExpanded(false)
                        registryLink()
                    }}>Registry</MainLink>
                </MainNav>
            </Navbar.Collapse>
        </MainNavBar>
    )

}

export default KNavBar