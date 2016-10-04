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
         <Header source={this.state.head} />          
         <List/>
         <Contents source= {this.state.list}/>
         <Nav/>

         </div>        
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'));