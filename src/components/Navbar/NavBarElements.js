import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBarElements = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Limmontech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="회사소개" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/About1">기업 문화</NavDropdown.Item>
              <NavDropdown.Item href="/About2">기업 연혁</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="기술제공" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/Announcement1">
                빌링 지원
              </NavDropdown.Item>
              <NavDropdown.Item href="/Announcement2">
                기술 지원
              </NavDropdown.Item>
              <NavDropdown.Item href="/Announcement3">
                보안 컨설팅
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="커뮤니티" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/Comunity1">상담 문의</NavDropdown.Item>
              <NavDropdown.Item href="/Comunity2">공지 사항</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="리몬텍팀" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/Carrer1">우리 문화</NavDropdown.Item>
              <NavDropdown.Item href="/Carrer2">채용 공고</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarElements;
