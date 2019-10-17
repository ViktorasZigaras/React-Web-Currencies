import React, {PureComponent} from 'react';
import './app.scss';
import {Container, Col} from 'reactstrap';
import List from './list/list.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <div className="main-section left-offset">
          <Col>
            <List/>
          </Col>
         </div>
      </Container>
    );
  } 
}

export default App;