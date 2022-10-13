import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Select from 'react-select'

class komponens1 extends Component {
    state = {            
        "Text": "",
        "Checkbox": false,
        "tArea1": "",
        "tArea2": "",
        "tArea3": "",
    }

    updateCard = (event) => {
        var set = event.target.value
        if(event.target.__reactProps$69yrl3iaf4u.type === "checkbox"){
            set = event.target.checked
        }
        this.setState({
            [event.target.__reactProps$69yrl3iaf4u.val]: set,
        })
    }



    render() { 
        return (
        <React.Fragment>
            <Form>
                <Form.Group>
                    <Form.Label>Text: </Form.Label>
                    <Form.Control type="text" placeholder="text" value={this.props.text} val="Text" onChange={this.updateCard.bind(this)}/>
                </Form.Group>
                <Select>

                </Select>
                <Form.Group>
                    <Form.Label>Checkbox: </Form.Label>
                    <Form.Control type="checkbox" placeholder="text" checked={this.props.Checkbox} val="Checkbox" onChange={this.updateCard.bind(this)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea1: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={this.props.tArea1} val="tArea1" onChange={this.updateCard.bind(this)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea2: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={this.props.tArea2} val="tArea2" onChange={this.updateCard.bind(this)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea3: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={this.props.tArea3} val="tArea3" onChange={this.updateCard.bind(this)}/>
                </Form.Group>
            </Form>
            <Card style={{ width: '18rem', backgroundColor:"gray"}}>
            <ListGroup variant="flush">
                <ListGroup.Item>Text: {this.state.Text}</ListGroup.Item>
                <ListGroup.Item>Checkbox: {"" + this.state.Checkbox}</ListGroup.Item>
                <ListGroup.Item>TextArea1: {this.state.tArea1}</ListGroup.Item>
                <ListGroup.Item>TextArea2: {this.state.tArea2}</ListGroup.Item>
                <ListGroup.Item>TextArea3: {this.state.tArea3}</ListGroup.Item>
            </ListGroup>
            </Card>
        </React.Fragment>);
    }
}
 
export default komponens1;