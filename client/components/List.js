class List extends React.Component {
    constructor(props) {
      super(props);
    //   this.connectSearch = this.connectSearch.bind(this); 
    }
    render(){
        return  (
        <div class="btn-group">
          <button type="button" class="btn btn-default">Left</button>
          <button type="button" class="btn btn-default">Middle</button>
          <button type="button" class="btn btn-default">Right</button>
          <button type="button" class="btn btn-default">Right2</button>
        </div>
        );
    }
};
 

window.List = List;