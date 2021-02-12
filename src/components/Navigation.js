import React from 'react';
import {Link} from 'react-router-dom';
import {Container , Row , Col , Nav } from 'react-bootstrap';


export class Navigation extends React.Component{
    render(){
        return(
            <div id="navigation">
                <Nav activeKey="/">
                    <Col xs={6} md={6}>
                    <Nav.Item> 
                        <Nav.Link><Link to="/"> Home </Link></Nav.Link>
                    </Nav.Item>
                    </Col>

                    <Col xs={6} md={6}>
                    <Nav.Item> 
                        <Nav.Link><Link to="/contacts"> Contacts </Link></Nav.Link>
                    </Nav.Item>
                    </Col>
                </Nav>
            </div>
        )
    }
}