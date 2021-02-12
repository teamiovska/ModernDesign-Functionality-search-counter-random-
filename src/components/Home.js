import React from 'react';
import {Container , Row, Col, Button, Media, Image } from 'react-bootstrap';



function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

export class Home extends React.Component{

    render(){
        
        return(
            <div id="home">
                
                <Row>

                {/* <Col id="background">
                    <img id="background_img" width={500} height={500} src={require('../images/bg.png')} />
                </Col> */}

                <Col className="left-div p-div" xs={0}>
                        <p>WELCOME, </p> <p> TO YOUR CONTACT LIST! </p>
                        <Button variant="secondary">New contact</Button>{' '}
                </Col>
                <Col xs={12} md={{span:9, offset:3}}>
                

                <table>
                    <tbody>
                        {
                        this.props.userList.map((user,i)=>{
                            console.log("index: ", i);
                            if(i < 5) {
                                return(
                                    <tr key={i}>
                                        {
                                            shuffleArray(this.props.userList).map((user,j)=>{
                                                console.log("index: ", i);
                                                if(j < 8) {
                                                    return(
                                                        <td key={j}>
                                                            <img src={user.image} width={145} height={135}  />
                                                        </td>
                                                    )
                                                }
                                            
                                        })
                                        }
                                    </tr>
                                )
                            }
                        
                    })
                    }
            </tbody>
           
                </table>
                    </Col>

                   
                   
                </Row>
                              
            </div>
        )
    }
}