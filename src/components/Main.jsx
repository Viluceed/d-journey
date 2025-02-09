import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import greetings from "../assets/daisy.png";

function Main() {
  return(
    <Container>
      <Image src={greetings} fluid/>
    </Container>
  )
};

export default Main;