import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Grid, Row } from 'react-flexbox-grid';
import ikmatPhoto from './static/ikmat.png';
import coronaPhoto from './static/corona.png';
import intoproPhoto from './static/intopro.png';
import sundbaatenPhoto from './static/sundbaaten.jpeg';
import htmlcssjsPhoto from './static/htmlcssjs.jpg';

class Projects extends Component {
	render() {
		return (
			<div className="cardContainer">
				<Grid>
					<Row around="xs">
						<Card
							className="projectCard"
							shadow={2}
							style={{
								margin: '1em',
							}}
						>
							<CardTitle
								style={{
									maginTop: '0.1em',
								}}
							>
								Sundbåten Departures
							</CardTitle>
							<CardText style={{ height: '100%' }}>
								<p>
									PWA made with VueJS fetching departures from entur's open GraphQL API and presenting
									the upcoming departures.
								</p>
							</CardText>
							<CardActions border>
								<a href="https://github.com/jvik/sundbaaten-webapp">
									<Button colored>
										<i className="fab fa-github" /> GitHub
									</Button>
								</a>
								<a href="https://sundbaat.jvik.no">
									<Button colored>
										<i className="fas fa-vial" /> Demo
									</Button>
								</a>
							</CardActions>
						</Card>
						<Card
							className="projectCard"
							shadow={2}
							style={{
								margin: '1em',
							}}
						>
							<CardTitle
								style={{
									maginTop: '0.1em',
									background: `url(${coronaPhoto}) center / cover`,
								}}
							>
								COVID-19 Stats
							</CardTitle>
							<CardText style={{ height: '100%' }}>
								<p>
									PWA made with VueJS fetching statistics from various sources regarding COVID-19
									infection rates in Norway.
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
						<Card
							className="projectCard"
							shadow={2}
							style={{
								margin: '1em',
							}}
						>
							<CardTitle
								style={{
									maginTop: '0.1em',
									// background: `url(${coronaPhoto}) center / cover`,
								}}
							>
								Abyss Aquaservice
							</CardTitle>
							<CardText style={{ height: '100%' }}>
								<p>
									Information system custom built for Abyss' employees and customers. Order handling,
									statistics, reports etc. Built with VueJS + Quasar and NodeJS.
								</p>
								<p>No demo available. Licenses can be purchased.</p>
							</CardText>
							<CardActions border>
								<a href="https://abyss.no">
									<Button colored>
										<i className="fas fa-building" /> Company website
									</Button>
								</a>
							</CardActions>
						</Card>
						<Card
							className="projectCard"
							shadow={2}
							style={{
								margin: '1em',
							}}
						>
							<CardTitle
								style={{
									maginTop: '0.1em',
									background: `url(${ikmatPhoto}) center / cover`,
								}}
							>
								Isopiloten QA System
							</CardTitle>
							<CardText style={{ height: '100%' }}>
								<p>
									Lightweight Quality Assurance system made for Iso-Piloten made by Supernode. NodeJS
									REST API and VueJS + Quasar front end.
								</p>
								<p>No demo available. Licenses can be purchased.</p>
							</CardText>
							<CardActions border>
								<a href="https://iso-piloten.no">
									<Button colored>
										<i className="fas fa-building" /> Company website
									</Button>
								</a>
							</CardActions>
						</Card>
						<Card className="projectCard" shadow={2} style={{ margin: '1em' }}>
							<CardTitle style={{ background: `url(${intoproPhoto}) center / cover` }}>Intopro</CardTitle>
							<CardText style={{ height: '100%' }}>
								<p>
									E-learning platform for food safety built with NodeJS backend and VueJS frontend.
									Startup developed by Supernode, Eggedosis and ISO-Piloten.
								</p>
								<p>No demo available. Licenses can be purchased.</p>
							</CardText>
							<CardActions border>
								<a href="https://intopro.no">
									<Button colored>
										<i className="fas fa-building" /> Company website
									</Button>
								</a>
							</CardActions>
						</Card>
						<Card className="projectCard" shadow={2} style={{ margin: '1em' }}>
							<CardTitle style={{ background: `url(${sundbaatenPhoto}) center / cover` }}>
								Sundbåten slackbot
							</CardTitle>
							<CardText style={{ height: '100%' }}>
								<p>
									Slackbot I built to learn how to scrape webpages in NodeJS. Fetches departure tables
									for Sundebåten in Kristiansund, and has some simple commands to get info printed out
									on a slack server
								</p>
							</CardText>
							<CardActions border>
								<a href="https://github.com/jvik/sundbaaten">
									<Button colored>
										<i className="fab fa-github" /> GitHub
									</Button>
								</a>
							</CardActions>
						</Card>
						<Card className="projectCard" shadow={2} style={{ margin: '1em' }}>
							<CardTitle style={{ background: `url(${htmlcssjsPhoto}) center / cover` }}>
								INFO134 Prosjekt
							</CardTitle>
							<CardText style={{ height: '100%' }}>
								<p>
									Webpage built second year of university. Mobile first approach with flexbox & grid.
									Semantic tags in HTML5. API integration towards data.norge.no to fetch and process
									information from external sources. Built with HTML5, CSS3 and vanilla JS.
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
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Projects;
