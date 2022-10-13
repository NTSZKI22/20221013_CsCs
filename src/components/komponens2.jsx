import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';

class komponens2 extends Component {
    render() { 
        return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>{this.props.text1.split(" ")[0]}</Accordion.Header>
                <Accordion.Body>{this.props.text1}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Header>{this.props.text2.split(" ")[0]}</Accordion.Header>
                <Accordion.Body>{this.props.text2}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Header>{this.props.text3.split(" ")[0]}</Accordion.Header>
                <Accordion.Body>{this.props.text3}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
      );
    }
}
 
export default komponens2;
