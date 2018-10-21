import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePhoto from '../photo.png';

class LandingPage extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid" >
        <cell id="mainbox" col={12}>
          <img className="profile-photo" src={profilePhoto} alt="avatar"/>
          <div className="banner">
            <h1 className="banner-text">System&shy;utvikler</h1>
            <hr/>
            <p className="banner-text">HTML / CSS | JavaScript | Java</p>
            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/vikjorgen/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in"></i>
              </a>
              {/* GitHub */}
              <a href="https://github.com/jvik" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </cell>
      </Grid>
      </div>
    )
  }
}

export default LandingPage