import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button">
				<Layout>
					<Header className="header-color pl-0 mdl-layout--large-screen-only" scroll>
						<Navigation className="">
							<Link to="/">Home</Link>
							<Link to="resume">CV</Link>
							<Link to="projects">Projects</Link>
							<Link to="contact">Contact</Link>
						</Navigation>
					</Header>
					<Drawer className="">
						<Navigation>
							<Link to="/">Home</Link>
							<Link to="resume">CV</Link>
							<Link to="projects">Projects</Link>
							<Link to="contact">Contact</Link>
						</Navigation>
					</Drawer>
					<Content>
						<div className="page-content" />
						<Main />
					</Content>
				</Layout>
			</div>
		);
	}
}

export default App;
