import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return( 
      <Grid>
        <Cell col={4}>
        <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        
        <Cell col={8}>
          <h4 style={{marginTop: '0px', marginBottom: '2px'}}>{this.props.workplaceName}</h4>
          <h5 style={{marginTop: '0px', paddingTop: '0px'}}>{this.props.workplaceTitle}</h5>
          <p>{this.props.workplaceDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience