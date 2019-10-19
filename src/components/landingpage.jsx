import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePhoto from './static/photo.png';
import Typed from 'react-typed';

class LandingPage extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell id="mainbox" col={12}>
						<img className="profile-photo" src={profilePhoto} alt="avatar" />
						<div className="banner">
							<h1>Jørgen Vik</h1>
							<hr />
							<p className="banner-text">
								<Typed id="face" strings={['HTML | CSS | TypeScript | JavaScript']} typeSpeed={60} />
							</p>
							<div className="social-links">
								{/* LinkedIn */}
								<a
									href="https://www.linkedin.com/in/vikjorgen/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-linkedin-in" />
								</a>
								{/* GitHub */}
								<a href="https://github.com/jvik" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-github" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default LandingPage;
