import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navDesign.scss';

function NavBar() {
  return (
    <Navbar expand="lg" className='main'>
      <Container fluid style={{padding: '0px 15%'}}>
        <Navbar.Brand href="/" ><img src={`https://utility-assets.s3.amazonaws.com/media/assets/full-logo.png`} height="46px" alt='sharetrip logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/flight" key={1} style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }}>Flight</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to="/" key={0} activeclassName="selected">Bus</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to='/hotel' key={3}>Hotel</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to='/holiday' key={4}>Holiday</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to='/visa' key={5}>Visa</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to='/visa-guide' key={6}>Visa Guide</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to='/group-request' key={7}>Group Request</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to='/travel-advisory' key={8}>Travel Advisory</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                marginRight: '16px',
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to='/promotion' key={9}>Promotions</NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#1882FF" : "black",
                textDecoration: 'none',
                fontSize: '14px'
              };
            }} to='/blog' key={10}>Blog</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;