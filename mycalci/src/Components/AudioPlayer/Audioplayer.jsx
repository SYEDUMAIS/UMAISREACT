import react from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "../AudioPlayer/Audioplayer.css";

export const Audioplayer = () => {
  // const playmyaudio = new Audio('AudioLibraray/gametheme.mp3')
  // const handleaudioplay = () =>{
  //     playmyaudio.play();
  // }
  // const handleaudiostop = () =>{
  //     playmyaudio.pause();
  // }
  // ------------------bit logic for audio call-------------//

  const handleaudioplay = (bit) => {
    const playmyaudio = new Audio(`AudioLibraray/${bit}.mp3`);
    playmyaudio.play();
  };
  return (
    <div>
      <Card className="audiopaly">
        <Row>
          {/* <Col md={3}></Col>
                <Col md={3}><Button onClick={handleaudioplay}>Play</Button></Col>
                <Col md={3}><Button onClick={handleaudiostop}>Stop</Button></Col>
                <Col md={3}><Button onMouseDown={handleaudioplay} 
                onMouseUp={handleaudiostop}>Loop</Button></Col> */}
          {/* -------------------bit logic for audio-------------- */}
          <Col md={3}>
            <Button onMouseDown={() => handleaudioplay("gametheme")}>
              Gametheme
            </Button>
          </Col>
          <Col md={3}>
            <Button onMouseDown={()=>handleaudioplay("horse")}>horse</Button>
          </Col>

          <Col md={3}></Col>
        </Row>
      </Card>
    </div>
  );
};
