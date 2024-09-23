import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Icons 
import { LiaShoppingBagSolid } from "react-icons/lia";


export default function Header() {
  return (
    <Navbar expand="md" className=" p-3">
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>رولکس</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
        <Navbar.Collapse id="basic-navbar-nav text-warning">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'white' }}>صفحه اصلی</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>درباره ما</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>همه ساعت ها</Nav.Link>
          </Nav>
          <Nav className='me-4 nav-link-2'>
            <Nav.Link href="#link" style={{ color: 'white' }}>
            <LiaShoppingBagSolid className='ms-2' />
            سبد خرید
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>
              <div className='profile-section'>
                <span>آروین فرجی</span>
                <img src='images/team-member-05.jpg' alt='' className='profile-pic' />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
