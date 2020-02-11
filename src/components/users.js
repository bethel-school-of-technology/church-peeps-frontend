import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';



class Users extends Component {

    render() {
        let userList = this.props.userArray;
        console.log(userList);
    
        userList = userList.map(user => {
          return (
            <Segment>
              <Grid>
                <Grid.Column width={3} style={resultStyle.results}>
                  <Image src={user.avatar} fluid />
                </Grid.Column>
                <Grid.Column width={9} />
                <Grid.Column width={3} />
              </Grid>
            </Segment>
          );
        });
    
        console.log(userList);
        return userList;
      }
    
      render() {
        return (
          <div>
            {console.log(this.renderUsers())}
          </div>
        );
      }
    }