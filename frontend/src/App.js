import React, {useState} from 'react';
import './App.css';

import {SketchField, Tools} from 'react-sketch';

import { ListGroup, ListGroupItem, Container, Col, Row, Button } from 'reactstrap';

function App() {
  const [sketch, setSketch] = useState(null)
  const [prediction, setPrediction] = useState(null);
  const [predictionList, setPredictionList] = useState([]);

  const onSubmit = async () => {
    const image = sketch.toDataURL();
    const resp = await fetch("/predict", {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({"data": image})
    })

    const content = await resp.json();

    console.log(content);
    
    if (content["prediction"] != null) {
      setPrediction(content["prediction"])
      setPredictionList(content["predictions"])
    } else {
      alert("Error")
    }

  }

  const onErase = () => {
    sketch.clear()
    setPredictionList([])
    setPrediction(null)
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>MNIST MACHINE LEARNING DRAWER</h1>
        <SketchField  width='500px' 
                      height='500px' 
                      tool={Tools.Pencil} 
                      lineColor='black'
                      lineWidth={20}
                      ref={c => setSketch(c)}
                      forceValue
                      className="sketch"
        />
        <Container>
          <Button className="Buttons" color="success" onClick={onSubmit}>Submit</Button>
          <Button className="Buttons" color="danger" onClick={onErase}>Erase</Button>
        </Container>
        <Container style={{"width": "20%", "minWidth": "400px"}}>
        <ListGroup>
          <ListGroupItem>
                <span style={{"float": "left"}}>digits</span>
                <span style={{"float": "right"}}>accuracy</span>
          </ListGroupItem> 
          {
            predictionList && predictionList.map( (nums, i) => 
              
              <ListGroupItem style={{"backgroundColor": i === prediction? "green": "white"}}>
                <span style={{"float": "left"}}>{i}</span>
                <span style={{"float": "right"}}>{nums.toFixed(4)}</span>
              </ListGroupItem> 
            )
          }
        </ListGroup>          
        </Container>
      </div>
    </div>
  );
}

export default App;
