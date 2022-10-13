import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Select from 'react-select'

class komponens1 extends Component {
    
    constructor(props){
        super(props)
        this.formData = {
            Text: (this.props.text != null) ? this.props.text : "",
            Checkbox: (this.props.checkbox != null) ? this.props.checkbox : false,
            tArea1: (this.props.tarea1 != null) ? this.props.tarea1 : "",
            tArea2: (this.props.tarea2 != null) ? this.props.tarea2 : "",
            tArea3: (this.props.tarea3 != null) ? this.props.tarea3 : "",
        }
    }


    render() { 
        return (
        <React.Fragment>
            <Form>
                <Form.Group>
                    <Form.Label>Text: </Form.Label>
                    <Form.Control type="text" placeholder="text" value={this.props.text}/>
                </Form.Group>
                <Select>

                </Select>
                <Form.Group>
                    <Form.Label>Checkbox: </Form.Label>
                    <Form.Control type="checkbox" placeholder="text" checked={this.props.Checkbox}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea1: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={this.props.tArea1}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea2: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={this.props.tArea2}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea3: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={this.props.tArea3}/>
                </Form.Group>
            </Form>
            <Card style={{ width: '18rem', backgroundColor:"gray"}}>
            <ListGroup variant="flush">
                <ListGroup.Item>Text: {this.formData.text}</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            </Card>
        </React.Fragment>);
    }
}
 
export default komponens1;