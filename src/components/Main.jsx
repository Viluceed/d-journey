import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Main() {
  return(
    <Container className='offset-up'>
      <h1 className='big title'>D' journey</h1>
      <Button href='/journey/login' className='rounded-pill' variant='outline-primary'>See more</Button>
    </Container>
  )
};

export default Main;