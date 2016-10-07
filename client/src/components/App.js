import React from 'react';
import Header from './Header';
import Contents from './Contents';
import Navi from './Navi';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';


class App extends React.Component {
    constructor(props) {   
      super(props);                //---> props를 React.Component에 전달한다.   
      this.state = {
        head:window.headData,
        list:window.contentsData // 일단 불변이라고 둔다.
      }; 
    }
    render(){ 
        return (
          <div>
            <div>
              <Header source = {this.state.head} /> 
            </div>
            <Nav justified>
              <NavItem href="">엄빠순</NavItem>
              <NavItem href="">Link</NavItem>
              <NavItem href="">Link</NavItem>
              <NavItem href="">가격순</NavItem>
            </Nav>
            <div>
              <Contents source = {this.state.list}/>
            </div>
            <div>
                <Navi/>
             </div>
          </div>
        );
    }
}; 

export default App;
