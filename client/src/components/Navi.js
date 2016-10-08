import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class Navi extends React.Component {
    constructor(props) {
      super(props);
    //   this.connectSearch = this.connectSearch.bind(this); 
    }
    render(){
        return  (
          <div>
           <Nav justified>
            <NavItem href="">홈</NavItem>
            <NavItem href="">검색</NavItem>
            <NavItem href="">선정</NavItem>
            <NavItem href="">제안하기</NavItem>
           </Nav>
          </div>
        );
    }
};

export default Navi;