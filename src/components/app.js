import React from 'react';
import './app.scss';
import {Container, Col} from 'reactstrap';
import List from './list/list';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
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