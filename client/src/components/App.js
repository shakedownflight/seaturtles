import React from 'react';
import Header from './Header';
import List from './List';
import Contents from './Contents';
import Navi from './Navi';
// import contentsData  from './../../public/db/contentsData';

class App extends React.Component {
   constructor(props) {   
      super(props);                //---> props를 React.Component에 전달한다.   
      this.state = {
        head:window.headData,
        list:window.contentsData // []임. 
      }; 
    }
    render(){ 
        return (
          <div>
            <div>
              <Header source = {this.state.head}/> 
            </div>
            <div>
              <List />
            </div>
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
