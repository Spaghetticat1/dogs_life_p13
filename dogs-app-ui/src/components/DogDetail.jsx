import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const DogDetail = (props) => {
    const[counter, setCounter] = useState(0);
    const incrementCounter =()=>{
        setCounter(counter+1);
        props.parentCount(props.info.alias);
    }
  return (
    <Card >
      {/* <div className="imgContainer">
        <Card.Img variant="top" src={images[props.info.name.replaceAll(/\s/g, '')]} width="150px" />
      </div> */}
      <Card.Body >
        <Card.Title >Name: {props.info.name}</Card.Title>
        <Card.Text >Id: {props.info.id}</Card.Text>
        <Card.Text >Age: {props.info.age}</Card.Text>
        <Card.Text >Owner: {props.info.owner}</Card.Text>
        <Row>
            <Col><Button variant="primary" onClick={incrementCounter}>Like</Button></Col>
            <Col>{counter > 0  && <Card.Text >Likes: {counter}</Card.Text > }</Col>
        </Row>
      </Card.Body>
    </Card>
    
  )
}

export default DogDetail
