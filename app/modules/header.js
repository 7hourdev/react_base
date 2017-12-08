import React from 'react';
import { observer } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { withRouter, Route } from 'react-router-dom';

@observer 
class Header extends React.Component{
  render() {
    return (
    	<div className="home-header">
         <Navbar className="navbar navbar-normal-pages navbar-show">
            <Navbar.Header>
              <Navbar.Brand>
                <a className="navbar-brand" onClick={()=>self.props.history.push("/")}>
                  <p>HEADER</p>
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <RouteNavItem href="#" activeclassname="active">Link 1</RouteNavItem>
                <RouteNavItem href="#" activeclassname="active">Link 2</RouteNavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    	</div>
    	)
  }
}

var RouteNavItem = (props) =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <NavItem
        onClick={e => {e.preventDefault();history.push(e.currentTarget.getAttribute("href"))}}
        {...props}
        active={match ? true : false}
      >
        {props.children}
      </NavItem>}
  />;

export default withRouter(Header);