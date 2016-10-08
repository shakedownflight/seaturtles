import React from 'react';
import { Media } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

class ContentsEntry extends React.Component {
    constructor(prop) {
      super(prop);
    }
    render(){
        return  (
            <Media.ListItem href="" value={this.props.value}>
              <Media.Left>
              <img width={64} height={64} src={this.props.value.photo} alt="Image" />
              </Media.Left>
              <Media.Body>
              <Media.Heading>{this.props.value.name}</Media.Heading> 
              <p>{this.props.value.good}</p>
              </Media.Body>
            </Media.ListItem>
      );
}};

export default ContentsEntry;
