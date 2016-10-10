import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { NavItem, Nav, Navbar } from 'react-bootstrap';

class Navi extends React.Component {
    constructor(props) {
      super(props);
    //   this.connectSearch = this.connectSearch.bind(this); 
    }
    render(){
        return  (
          <div>
			      <Navbar fixedBottom >  {/*Navbar, Nav, NavItem tag should be orderd by this order 세개가 이 순서로 정렬해야 에러가 안뜸. parent-child 관계인듯*/ }
           		<Nav >
            		<NavItem eventKey={1} href="">홈</NavItem>
            		<NavItem eventKey={2} href="">검색</NavItem>
            		<NavItem eventKey={3} href="">선정</NavItem>
            		<NavItem eventKey={4} href="">제안하기</NavItem>
        		  </Nav>
            </Navbar>
          </div>
        );
    }
};

export default Navi;