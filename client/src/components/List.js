import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavItem, Navbar } from 'react-bootstrap';

class List extends React.Component {
    constructor(props) {
      super(props);
    //   this.connectSearch = this.connectSearch.bind(this); 
    }
    render(){
        return (
          <div>
            <Navbar fixedTop >
               <Nav >
                  <NavItem href="">엄빠순</NavItem>
                  <NavItem href="">List</NavItem>
                  <NavItem href="">list</NavItem>
                  <NavItem href="">가격순</NavItem>
               </Nav>
            </Navbar>
          </div>
        );
    }
};
 

export default List;