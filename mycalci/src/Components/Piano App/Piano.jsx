import react from 'react';
import { Button, Card } from 'react-bootstrap';
import '../Piano App/Piano.css';

export const Piano = () =>{
    return(
        <div>
            <Button variant="outline-dark" className="sa_tune">Sa</Button>
            <Button variant="outline-dark" className="re_tune">Re</Button>
            <Button variant="outline-dark" className="ga_tune">Ga</Button>
            <Button variant="outline-dark" className="ma_tune">Ma</Button>
            <Button variant="outline-dark" className="pa_tune">Pa</Button>
            <Button variant="outline-dark" className="dha_tune">Dha</Button>
            <Button variant="outline-dark" className="ni_tune">Ni</Button>
        </div>
    )
}