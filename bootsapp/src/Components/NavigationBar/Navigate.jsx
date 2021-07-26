import React from 'react';
import Marquee from "react-fast-marquee";
import {Nav} from "react-bootstrap";
import '../Components/Navigate.css';
import Searchbar from './Searchbar';


const Navigate = () => {
    return (
        <div>
          <Marquee speed="90" className="slidetext">
                For Assistance : call- +91 XXX XXX XXXX; Email- xyz@abc.com
              </Marquee>
            <Nav className="navclass" activeKey="/home" onSelect={(selectedKey) => 
                alert(`selected ${selectedKey}`)}>
                <Nav.Item className="navcomponent1">
                  <Nav.Link href="/home" style={{color:"black"}}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home" style={{color:"black"}} style={{color:"black"}} className="Navitem1">ProductCatalog <img src="down arrow.png" alt="" className="navcomponent2"/> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home" style={{color:"black"}} className="Navitem1">Resources<img src="down arrow.png" alt="" className="navcomponent2"/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home" style={{color:"black"}} className="Navitem1">Success Stories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home" style={{color:"black"}} className="Navitem1">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home" style={{color:"black"}} className="Navitem1">Contact Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home" style={{color:"black"}} className="Navitem1">Forum</Nav.Link>
                </Nav.Item>
            </Nav>
            <Searchbar />
        </div>
    );
};

export default Navigate;