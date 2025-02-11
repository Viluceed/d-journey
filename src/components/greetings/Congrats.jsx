import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import gif1 from "../../assets/gif/bubu-dudu-sseeyall.gif";
import gif2 from "../../assets/gif/cute-spin-cute-bubu.gif";
import gif3 from "../../assets/gif/dudu-bubu-playing-funny.gif";

function Congrats() {
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  function calculateTimeElapsed() {
    const startDate = new Date("2024-04-29T00:00:00");
    const currentDateTime = new Date();
    const totalSeconds = Math.floor((currentDateTime - startDate) / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds =totalSeconds % 60;

    return {days:days, hours:hours, minutes:minutes, seconds:seconds}
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return(
    <Container>
      <img src={gif1} style={{ position: "fixed", bottom: "5rem", right: "5rem" }} />
      <img src={gif2} style={{ position: "fixed", bottom: "5rem", left: "5rem" }} />
      <img src={gif3} style={{ position: "fixed", top: "8rem", left: "50%", transform: "translateX(-50%)" }}/>
      <div className="body offset-up mt-4">
        <h1 className='pb-3'>YAAAAYYY!! I'm so excited to be with you!!</h1>
        <h1>Been together for:</h1>
        <p style={{ fontSize: "2rem" }}>{timeElapsed.days}d : {timeElapsed.hours}h : {timeElapsed.minutes}m : {timeElapsed.seconds}s</p>
      </div>
    </Container>
  )
};

export default Congrats;