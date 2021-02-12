import React from 'react';
import {Container , Row, Col, InputGroup, FormControl, Media, Image, CardGroup, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import { FaSearch, FaPhone, FaRegEnvelope } from 'react-icons/fa';



export class Contacts extends React.Component{

      constructor(props) {
        super(props);

        this.state = { search: null };

        this.filterContacts = this.filterContacts.bind(this);
    }


    filterContacts(event) {
      this.setState({search:event.target.value})
    }
  

    render(){

        return(
            <div id="contacts">               
              <Row>
                <Col xs={12}  className="contact-div p-div">
                    <p> You Have <span className="count-c"><CountUp end={this.props.userList.length} duration={3} /></span> contacts</p>
                    <InputGroup xs={12} className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="search" ><FaSearch /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Search" className="searchInput" onChange={this.filterContacts}/>
                    </InputGroup> 
                </Col>
                <Col xs={12} md={{span:6, offset:6}} className="media-div">

                {
                this.props.userList.filter((data) => {
                  if(this.state.search == null)
                      return data
                  else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.surname.toLowerCase().includes(this.state.search.toLowerCase())){
                      return data
                  }
                }).map((user,i)=>{
                  return(
                    <Media id="media" key={i}>
                      <Image width={110} height={110} 
                        className="align-self-start mr-3 media-image"
                        src={user.image} roundedCircle 
                        alt="Generic placeholder"
                      />
                      <Media.Body id="media-body">
                        <h5>{user.name} {user.surname}</h5>
                        <p><FaPhone /> {user.phone} </p>
                        <p><FaRegEnvelope /> {user.email} </p>
                      </Media.Body>
                    </Media>                    
                  )
                })
              }           
              </Col>
            </Row>
            </div>
        )
    }
}