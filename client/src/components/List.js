import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavItem, Navbar } from 'react-bootstrap';

class List extends React.Component {
    constructor(props) {
      super(props);
    }
    changePosition(key){
      console.log('click?')
      this.props.onReorder(key);
      
    }
    render(){
        return (
            <Navbar >
               <Nav >
                  <NavItem href="" onClick = {this.changePosition.bind(this,'important')}>엄빠순</NavItem>
                  <NavItem href="" onClick = {this.changePosition.bind(this,'important')}>List</NavItem>
                  <NavItem href="" onClick = {this.changePosition.bind(this,'important')}>list</NavItem>
                  <NavItem href="" onClick = {this.changePosition.bind(this,'price')}>가격순</NavItem>
               </Nav>
            </Navbar>
        );
    }
};
 

export default List;