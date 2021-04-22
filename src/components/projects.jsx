import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Grid, Row } from 'react-flexbox-grid';
import projectData from './data/projectData';

function CardActionBar(props) {
	if (props.githubUrl || props.demoUrl) {
		return (
			<CardActions border>
				<GithubUrlButton githubUrl={props.githubUrl} /> <DemoUrlButton demoUrl={props.demoUrl} />{' '}
			</CardActions>
		);
	} else {
		return null;
	}
}

function GithubUrlButton(props) {
	if (props.githubUrl) {
		return (
			<a href={props.githubUrl}>
				<Button colored>
					<i className="fab fa-github" /> GitHub
				</Button>
			</a>
		);
	} else {
		return null;
	}
}

function DemoUrlButton(props) {
	if (props.demoUrl) {
		return (
			<a href={props.demoUrl}>
				<Button colored>
					<i className="fas fa-vial" /> Demo
				</Button>
			</a>
		);
	} else {
		return null;
	}
}

function DevelopedAt(props) {
	if (props.company) {
		return (
			<div>
				<p>
					<b>Product developed at {props.company}</b>
				</p>
				<p>No demo available</p>
			</div>
		);
	} else {
		return null;
	}
}

class Projects extends Component {
	render() {
		return (
			<div className="cardContainer">
				<Grid>
					<Row around="xs">
						{projectData.map((data, key) => {
							return (
								<Card
									key={key}
									className="projectCard"
									shadow={2}
									style={{ width: '512px', margin: '1em' }}
								>
									<CardTitle
										style={{
											background: `url(${data.image}) center / cover`,
											maginTop: '0.1em',
										}}
									>
										{data.title}
									</CardTitle>
									<CardText style={{ height: '100%' }}>
										<p>{data.description}</p>
										<DevelopedAt company={data.developedAt} />
									</CardText>
									<CardActionBar demoUrl={data.demoUrl} githubUrl={data.githubUrl} />
								</Card>
							);
						})}
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Projects;
