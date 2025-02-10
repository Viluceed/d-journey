import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import cardDisplay from "../assets/val.png";

// const ACTIONS = { ADD_DIGIT: 'add-digit', CLEAR: 'clear', SUBMIT: 'submit'}

const keypadNumbers = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  [<i className="bi bi-x-lg"></i>, "0",  <i className="bi bi-arrow-right"></i>],
  ];

  
  function Passcode() {
    const navigate = useNavigate(); 

    const handleClick = (num, id) => {
      const display = document.getElementById("output")
      if (!isNaN(num) && Number.isInteger(parseFloat(num)) && display.value.length < 4) {
        display.value += num
      } if (id == "[object Object]-0") {
        display.value = ''
      } if (id == "[object Object]-2") {
          if (display.value == "0429") {
            navigate("/journey/invitation")
          }
      }
    };
  return(
    <Container>
      <Card className="p-0 primary-color">
        <Card.Title className='pt-4'>Enter Passcode</Card.Title>
        <Card.Body>
          <div className='d-flex gap-3 primary-color'>
            <CardGroup className="primary-color">

              <Card style={{ width: '20rem' }} className="bg-transparent border-0 justify-content-center">
                <Image src={cardDisplay} className="p-2" rounded/>
              </Card>

              <Card style={{ width: '20rem' }} className='bg-transparent border-0 d-flex'>
                <Container>
                  <input type="password" id='output' className='pin-value'/>

                  {keypadNumbers.map((row, rowIndex) => (
                    <Row key={rowIndex} className="p-2">
                      {row.map((num, numIndex) => (
                        <Col key={`${rowIndex}-${numIndex}`}>
                          <Button onClick={() => handleClick(num, `${num}-${numIndex}`)} id={`${num}-${numIndex}`} style={{ width: "42px", height: "42px" }} className='rounded-circle' variant="outline-primary">{num}</Button>
                        </Col>
                      ))}
                    </Row>
                  ))}
                </Container>

              </Card>
            </CardGroup>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Passcode;