import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import contactphoto from '../contactphoto.jpg';

class Contact extends Component {
  render () {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jørgen Vik</h2>
            <img className="profile-photo" src={contactphoto} alt="avatar" style={{height: '250px'}}></img>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Erfaren, faglært teknisk konsulent og IKT-koordinator med fartstid innen brukerstøtte, serverdrift og ASP-teknologier. Dyktig i Windows Server, Linux og skytjenester. Grunnleggende ferdigheter i objektorientert programmering og front end webutvikling.</p>
          </Cell>

          <Cell col={6}>
            <h2>Contact me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +47 91 99 99 47
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px'}}>
                  <i class="fas fa-envelope-square"></i>
                    mail@jvik.no
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px'}}>
                  <i class="fab fa-skype"></i>
                    jorgenvik
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact