import React from 'react';
import { Container, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import List from './list/list';

const App = (/*props*/) => {
  return (
    <Container>
      <div className="main-section left-offset">
        <Col>
          <List />
        </Col>
      </div>
    </Container>
  );
}

export default App;