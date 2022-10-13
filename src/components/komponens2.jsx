import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';

class komponens2 extends Component {
    render() { 
        return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>{this.props.text1.split(" ")[0]}</Accordion.Header>
                <Accordion.Body>asd</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body></Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body></Accordion.Body>
            </Accordion.Item>
        </Accordion>
      );
    }
}
 
export default komponens2;
