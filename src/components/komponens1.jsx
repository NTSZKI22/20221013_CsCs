import React from 'react'
import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Select from 'react-select'
import Komponens2 from '../components/komponens2';

function Komponens1(props) {
    const [text, setText] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [tArea1, setTArea1] = useState("");
    const [tArea2, setTArea2] = useState("");
    const [tArea3, setTArea3] = useState("");

    return (
        <React.Fragment>
            <Form>
                <Form.Group>
                    <Form.Label>Text: </Form.Label>
                    <Form.Control type="text" placeholder="text" id="Text" value={props.Text} val="Text" onChange={(event) => setText(event.target.value)}/>
                </Form.Group>
                <Select>

                </Select>
                <Form.Group>
                    <Form.Label>Checkbox: </Form.Label>
                    <Form.Control type="checkbox" placeholder="text" checked={props.Checkbox} val="Checkbox" onChange={(event) => setCheckbox(event.target.checked)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea1: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={props.tArea1} val="tArea1" onChange={(event) => setTArea1(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea2: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={props.tArea2} val="tArea2" onChange={(event) => setTArea2(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Textarea3: </Form.Label>
                    <Form.Control type="textarea" placeholder="text" value={props.tArea3} val="tArea3" onChange={(event) => setTArea3(event.target.value)}/>
                </Form.Group>
            </Form>
            <Card style={{ width: '18rem', backgroundColor:"gray"}}>
            <ListGroup variant="flush">
                <ListGroup.Item>Text: {text}</ListGroup.Item>
                <ListGroup.Item>Checkbox: {"" + checkbox}</ListGroup.Item>
                <ListGroup.Item>TextArea1: {tArea1}</ListGroup.Item>
                <ListGroup.Item>TextArea2: {tArea2}</ListGroup.Item>
                <ListGroup.Item>TextArea3: {tArea3}</ListGroup.Item>
            </ListGroup>
            </Card>
        <Komponens2 text1={tArea1} text2={tArea2} text3={tArea3}/>
        </React.Fragment>
        );
  }

export default Komponens1;