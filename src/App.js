import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
              <a href="/">Home</a>
              <a href="/resume">Resume</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact Me</a>
            </Navigation>
          </Header>
          <Drawer title="My Portfolio">
            <Navigation>
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Me</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content"></div>
            <Main/>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App
