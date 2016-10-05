import React from 'react';
import Header from './Header';
import List from './List';
import Contents from './Contents';
import Nav from './Nav';

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
            <Header source = {this.state.head} /> 
            <List/>
            <Contents source = {this.state.list}/>
            <Nav/>
          </div>
        );
    }
}; 

export default App;
