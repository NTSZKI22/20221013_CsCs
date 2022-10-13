import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ElsoMenu, MasodikMenu, HarmadikMenu, NegyedikMenu, NoPage} from "./fakedata";

class komponens3 extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                 <BrowserRouter>                 
                    <Routes>
                        <Route path="/">
                        <Route path='elso' element={<ElsoMenu />} />
                        <Route path="masodik" element={<MasodikMenu />} />
                        <Route path="harmadik" element={<HarmadikMenu />} />
                        <Route path="negyedik" element={<NegyedikMenu />} />
                        <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>

                    <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/elso">Elso</Nav.Link>
                            <Nav.Link as={Link} to="/masodik">Masodik</Nav.Link>
                            <Nav.Link as={Link} to="/harmadik">Harmadik</Nav.Link>
                            <Nav.Link as={Link} to="/negyedik">Negyedik</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </BrowserRouter>
            </React.Fragment>           
        );
    }
}
 
export default komponens3;