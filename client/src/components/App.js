//import axios from 'axios';
import React from 'react';
//import Header from './Header';
import List from './List';
import Contents from './Contents';
import Navi from './Navi';
import Login from './Login';
// import contentsData  from './../../public/db/contentsData';
// import { Nav } from 'react-bootstrap';
import { Pager, ListGroup, ListGroupItem, Navbar, Nav } from 'react-bootstrap';

class App extends React.Component {
   constructor(props) {   
      super(props);                //---> props를 React.Component에 전달한다.   
      this.state = {
        list:[
          {
            name: "",
            photo: "",
            good:"",
            bad:"",
            price:"",
            important:""
          }
        ] // public/db/exampleData.js
      };
      // axios.get('/datas')
      //   .then( response => {
      //     console.log("axios success");
      //     console.log("success data", response);
      //     this.setState({list: response});
      //   }) // SUCCESS
      this.handleReorder = this.handleReorder.bind(this);
      this.sortOn = this.sortOn.bind(this);
    };
    componentWillMount(){
    };
    componentDidMount(){
      this.handleReorder();


    };

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
        return (
          <div>
              <div><Pager.Item previous href="#"> &larr; Previous Page</Pager.Item > 엄빠주의 </div>
              <Login/>
              <List onReorder= {this.handleReorder}/>
              <Contents source= {this.state.list} onReorder = {this.handleReorder}/>
              <Navi/>
          </div>
        );
    }
}; 

export default App;
