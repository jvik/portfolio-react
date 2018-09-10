import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return( 
      <Grid>
        <Cell col={2}>
        <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        
        <Cell col={10}>
          <h4 style={{marginTop: '0px', marginBottom: '2px'}}>{this.props.schoolName}</h4>
          <h5 style={{marginTop: '0px', paddingTop: '0px'}}>{this.props.educationTitle}</h5>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education