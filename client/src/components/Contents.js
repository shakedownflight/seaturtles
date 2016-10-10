import React from 'react';
//import { Scrollspy }  from 'react-scroll';//'react-scrollspy';
import ContentsEntry from './ContentsEntry';

class Contents extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return  (
          <div >
              { this.props.source.map((chocolate, i) => {
                return (
                      <ContentsEntry value={chocolate} key={i} />
                );
               })}
          </div>
        );
    }
};

export default Contents;
//Data순서를 바꿔서 맵핑을 어떻게 하지? 
