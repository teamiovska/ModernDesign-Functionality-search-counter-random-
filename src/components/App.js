import React from 'react';
import {Home} from './Home';
import {Contacts} from './Contacts';
import {Navigation} from './Navigation';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';


export class App extends React.Component{
    constructor(props){
        super();
        this.state = {
          users:[]
        }
      }
    
      componentDidMount () {
        this.fetchUsers();
      }
    
      fetchUsers = () => {
          axios({
            url: 'https://my-json-server.typicode.com/teamiovska/database/users',
            method: 'GET'
          }).then(res => {
            this.setState({
              users: res.data
            })
          })
          .catch(error => {
            alert(error)
          })
    
      }
    render(){
        return(
            <div>
                <Navigation />
                <Switch>
                    <Route exact path = "/" render={()=>{
                        return <Home userList={this.state.users}/>
                    }} />
                    <Route path = "/contacts" render={()=>{
                        return <Contacts userList={this.state.users}/>
                    }} />
                </Switch>
                
            </div>
        )
    }
}