import './Invitation.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Invitation() {
  const OnHoverHandler = (e) => {
    e.target.style.left = `${Math.ceil(Math.random() * 90)}%`
    e.target.style.top = `${Math.ceil(Math.random() * 90)}%`
  }

  return(
    <div className='d-flex'>
      <div className='container offset-left'>
        <div className="greetings">
          <div className="envelope">
            <div className="paper">
              <div>
                <h2 className="text">Happy Valentine's Day</h2>
                <br />
                <div className='body px-2'>
                  <p>
                    Hi bb! I love you so so so much. Eto na ang pinakahihintay mu hahaha
                  </p>
                  <p>
                    It's a bit sad kasi di tayo magkasama sa Valentine's pero ayon there's nothing we can do about it. 
                  </p>
                  <p> Goodluck sa work! Stay safe!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="front"></div>
        </div>
      </div>
      <div className=' justify-content-center align-items-center'>
        <Row>
          <Col>
            <p className='title'  style={{ fontSize: "3rem" }}>Will you be my valentine?</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button 
              href='/d-journey/congrats' 
              className='btn-lg rounded-pill m-2' 
              variant='outline-success'>
              Yes
            </Button>
          </Col>
          <Col>
            <Button 
              className='rounded-pill btn-lg m-2' 
              variant='outline-danger' 
              onMouseEnter={OnHoverHandler} 
              style={{
                position: "absolute",
                transition: "top 0.3s, left 0.3s" }}>
              No
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
};

export default Invitation;