import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import logo from '../../../Images/logos/logo.png';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='dark'
        variant='dark'
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img height={30} src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='home'>
                Home
              </Nav.Link>
              <Nav.Link href='home#services'>Services</Nav.Link>
              <Nav.Link as={Link} to='blogs'>
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='about'>
                About
              </Nav.Link>

              {user ? (
                <button
                  className='btn btn-link text-danger text-decoration-none'
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              ) : (
                <Nav.Link as={Link} to='login'>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
