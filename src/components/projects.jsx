import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
	render() {
		return (
			<div className="cardContainer">
				<Card className="projectCard" shadow={2} style={{ margin: '1em' }}>
					<CardTitle>Norsk Coronavirus-statistikk</CardTitle>
					<CardText style={{ height: '100%' }}>
						<p>
							PWA made with VueJS fetching statistics from various sources regarding infection rates in
							Norway.
						</p>
					</CardText>
					<CardActions border>
						<a href="https://github.com/jvik/corona">
							<Button colored>
								<i className="fab fa-github" /> GitHub
							</Button>
						</a>
						<a href="https://corona.jvik.no">
							<Button colored>
								<i className="fas fa-vial" /> Demo
							</Button>
						</a>
					</CardActions>
				</Card>
				<Card className="projectCard" shadow={2} style={{ margin: '1em' }}>
					<CardTitle>Intopro</CardTitle>
					<CardText style={{ height: '100%' }}>
						<p>
							E-learning platform for food safety built with NodeJS backend and VueJS frontend. Startup
							developed by Supernode, Eggedosis and ISO-Piloten.
						</p>
					</CardText>
					<CardActions border>
						<a href="https://github.com/jvik/INFO134-Semesteroppgave-Nystudent">
							<Button colored>
								<i className="fab fa-github" /> GitHub
							</Button>
						</a>
					</CardActions>
				</Card>
				<Card className="projectCard" shadow={2} style={{ margin: '1em' }}>
					<CardTitle>INFO134 Prosjekt</CardTitle>
					<CardText style={{ height: '100%' }}>
						<p>
							Webpage built second year of university. Mobile first approach with flexbox & grid. Semantic
							tags in HTML5. API integration towards data.norge.no to fetch and process information from
							external sources. Built with HTML5, CSS3 and vanilla JS.
						</p>
					</CardText>
					<CardActions border>
						<a href="https://github.com/jvik/INFO134-Semesteroppgave-Nystudent">
							<Button colored>
								<i className="fab fa-github" /> GitHub
							</Button>
						</a>
					</CardActions>
				</Card>
			</div>
		);
	}
}

export default Projects;
