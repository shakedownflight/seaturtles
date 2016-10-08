import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
      super(props);
    //   this.connectSearch = this.connectSearch.bind(this); 
    }
    render(){
        
        return  (
        <div>
          <Navbar fixedBottom> 엄빠주의 </Navbar>
        </div>
        );
    }
};
 

export default Header;