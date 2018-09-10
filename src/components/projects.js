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
          <Card className="projectCard" shadow={3} style={{width: '300px', height: '500px', margin: '2em'}}>
            <CardTitle style={{color: 'black', height: '250px', background: `url(${nystudentbilde}) center / cover`}}>INFO134 Prosjekt</CardTitle>
            <CardText>
              <p>Webside utviklet med HTML, CSS og JavaScript. Responsiv nettside ved bruk av flexbox og grid. Effektiv bruk av semantiske tagger i HTML5. 
              API integrasjoner mot data.norge.no for å hente og prosessere informasjon fra eksterne kilder.</p>
            </CardText>
            <Button colored>GitHub</Button>
            <Button colored>Preview</Button>
          </Card>
          <Card className="projectCard" shadow={3} style={{width: '300px', height: '500px', margin: '2em'}}>
            <CardTitle style={{color: 'black', height: '250px', background: 'URL(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6a%2FJavaScript-logo.png&f=1) center / cover'}}>INFO134 Prosjekt</CardTitle>
            <CardText>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id eros ante. Fusce neque sem, dictum et tortor eu, tempus fringilla turpis. 
                Duis porttitor orci at tempor faucibus. Vivamus et diam in sapien dapibus molestie. Nam ex augue, ultricies at enim vel, egestas sagittis magna. 
                Nulla sem orci, mollis malesuada pulvinar id, pulvinar porttitor odio. Nullam commodo varius tristique.</p>
            </CardText>
            <Button colored>GitHub</Button>
            <Button colored>Preview</Button>
          </Card>
        </div>
      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>Nothing here yet</h1>
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