import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import nystudentbilde from '../nystudent.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="cardContainer">
          <Card className="projectCard" shadow={3} style={{margin: '2em'}}>
            <CardTitle>INFO134 Prosjekt</CardTitle>
            <CardText>
              <p>Webside utviklet med HTML, CSS og JavaScript. Responsiv nettside ved bruk av flexbox og grid. Effektiv bruk av semantiske tagger i HTML5. 
              API integrasjoner mot data.norge.no for å hente og prosessere informasjon fra eksterne kilder.</p>
            </CardText>
            <CardActions border>
              <a href="https://github.com/jvik/INFO134-Semesteroppgave-Nystudent"><Button colored>GitHub</Button></a>
              <Button colored>Preview</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div className="cardContainer">
          <Card className="projectCard" shadow={3} style={{margin: '2em'}}>
            <CardTitle>INFO116 Prosjekt</CardTitle>
            <CardText>
              <p>Opprettet ontologi for øl-nettsted med bruk av Protégé. Implementert microdata og RDFa Lite i en mockupside for å demonstere bruk av semantiske teknologier i web. Bruk av Apache Jena Fuseki og SPARQL for å gjøre spørringer mot ontologi.</p>
            </CardText>
            <CardActions border>
              <a href="https://github.com/jvik/INFO116-Gruppeoppgave"><Button colored>GitHub</Button></a>
              <Button colored>Preview</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
  }
  
  render () {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web Development</Tab>
          <Tab>Other projects</Tab>  
        </Tabs>
      <section className="projects-grid">
        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </section>
      </div>
    )
  }
}

export default Projects