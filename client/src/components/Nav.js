import React from 'react';

class Nav extends React.Component {
    constructor(props) {
      super(props);
    //   this.connectSearch = this.connectSearch.bind(this); 
    }
    render(){
        return  (
        <div className="btn-group">
          <button type="button" className="btn btn-default">Left</button>
          <button type="button" className="btn btn-default">Middle</button>
          <button type="button" className="btn btn-default">Right</button>
          <button type="button" className="btn btn-default">Right2</button>
        </div>
        );
    }
};

export default Nav;