import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kontakt meg</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    <a href="tel:004791999947">+47 91 99 99 47</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fas fa-envelope-square" />
                    <a href="mailto:mail@jvik.no">mail@jvik.no</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fab fa-linkedin-in" />
                    <a href="https://www.linkedin.com/in/vikjorgen/">
                      vikjorgen
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
