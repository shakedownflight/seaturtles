import React from 'react';
//import Header from './Header';
import List from './List';
import Contents from './Contents';
import Navi from './Navi';
// import contentsData  from './../../public/db/contentsData';
// import { Nav } from 'react-bootstrap';
import { Pager, ListGroup, ListGroupItem, Navbar, Nav } from 'react-bootstrap';

class App extends React.Component {
   constructor(props) {   
      super(props);                //---> props를 React.Component에 전달한다.   
      this.state = {
        head:window.headData,
        list:window.contentsData // public/db/exampleData.js 
      }; 
      this.handleReorder = this.handleReorder.bind(this);
      this.sortOn = this.sortOn.bind(this);
    }
    componentDidMount(){
      this.handleReorder();
    }
    sortOn(arr,key){
        arr.sort(function(a,b){
          if(a[key]<b[key]){
            return -1;
          } else if(a[key] > b[key]){
            return 1;
          } 
          return 0; 
        });
    }
    handleReorder(key){
      var reorderedData = this.sortOn(window.contentsData, key); //새로 정렬한 data. this.state.list는 못 가져옴 
      this.setState({ list: reorderedData });
    }
    render(){ 
        console.log("!!!!!", this.state.list);
        return (
          <div>
              <div><Pager.Item previous href="#"> &larr; Previous Page</Pager.Item > 엄빠주의 </div>
              <List onReorder= {this.handleReorder}/>
              <Contents source= {this.state.list} onReorder = {this.handleReorder}/>
              <Navi/>
          </div>
        );
    }
}; 

export default App;
