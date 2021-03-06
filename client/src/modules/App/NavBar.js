import React from 'react';
import { browserHistory } from 'react-router';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem} from 'react-bootstrap';

import { checkNav } from '../../utils';

const NavBar = ({ route: { pathname }, isUser }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a style={{ cursor: 'pointer' }} onClick={() => browserHistory.push('/')}>HelpMeLearnToCode</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem active={checkNav(pathname, '/')} onClick={() => browserHistory.push('/')}>Home</NavItem>

        <NavItem
          active={checkNav(pathname, '/paths')}
          onClick={() => browserHistory.push('/paths')}
        >
          Paths
        </NavItem>

        <NavItem
          active={checkNav(pathname, '/course')}
          onClick={() => browserHistory.push('/course')}
        >
          Course
        </NavItem>

      </Nav>
      {isUser ? (
        <Nav pullRight>
          <NavItem
            active={checkNav(pathname, '/logout')}
            onClick={() => browserHistory.push('/logout')}>
            Log Out
          </NavItem>
        </Nav>
      ) : (
        <Nav pullRight>
          <NavItem
            active={checkNav(pathname, '/login')}
            onClick={() => browserHistory.push('/login')}>
            Log In
          </NavItem>

          <NavItem
            active={checkNav(pathname, '/signup')}
            onClick={() => browserHistory.push('/signup')}>
            Sign Up
          </NavItem>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar;
